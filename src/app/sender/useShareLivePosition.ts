import { useEffect, useState } from 'react';
import type { DefaultEventsMap } from 'socket.io/dist/typed-events';
import type { Socket } from 'socket.io-client';
import { io } from 'socket.io-client';
import { useAccount } from '../contexts/UserContext';
import { usePosition } from '../contexts/PositionContext';
import { usePersistentState } from '../utils/storage';
import { toast } from 'react-toastify';
import type { Group } from '../utils/useReadLivePosition';
import useShareHotkeys from './useShareHotkeys';

function useShareLivePosition(token: string, serverUrl: string) {
  const [isSharing, setIsSharing] = usePersistentState(
    'share-live-position',
    false
  );
  const [socket, setSocket] = useState<Socket<
    DefaultEventsMap,
    DefaultEventsMap
  > | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [status, setStatus] = useState<{
    group: Group;
    connections: string[];
  } | null>(null);

  const { position, location, region, worldName, map, username } =
    usePosition();
  const { account } = useAccount();

  useShareHotkeys(socket);

  useEffect(() => {
    if (!isSharing) {
      return;
    }
    if (!token || !serverUrl) {
      setIsSharing(false);
      return;
    }
    const newSocket = io(serverUrl, {
      query: {
        token,
        steamId: account!.steamId,
        steamName: account!.name,
        isOverwolfApp: true,
      },
      upgrade: false,
      transports: ['websocket'],
    });
    setSocket(newSocket);

    const updateStatus = () => {
      newSocket.emit('status', (group: Group, connections: string[]) => {
        setStatus({ group, connections });
      });
    };

    newSocket.on('connect', () => {
      if (newSocket.connected) {
        setIsConnected(true);
        toast.success('Sharing live status 👌');
        updateStatus();
      }
    });

    newSocket.on('connected', (isOverwolfApp, steamName) => {
      const message = isOverwolfApp
        ? `${steamName} connected 🎮`
        : 'Website connected 👽';
      toast.info(message);
      updateStatus();
    });

    newSocket.on('disconnected', (isOverwolfApp, steamName) => {
      const message = isOverwolfApp
        ? `${steamName} disconnected 👋`
        : 'Website disconnected 👋';
      toast.info(message);
      updateStatus();
    });

    return () => {
      newSocket.close();
      setIsConnected(false);
      setSocket(null);
      setStatus(null);
      toast.info('Stop sharing live status 🛑');
    };
  }, [isSharing, account?.steamId]);

  useEffect(() => {
    if (socket) {
      socket.emit('position', position);
    }
  }, [socket, position]);

  useEffect(() => {
    if (socket) {
      socket.emit('location', location);
    }
  }, [socket, location]);

  useEffect(() => {
    if (socket) {
      socket.emit('worldName', worldName);
    }
  }, [socket, worldName]);

  useEffect(() => {
    if (socket) {
      socket.emit('map', map);
    }
  }, [socket, map]);

  useEffect(() => {
    if (socket) {
      socket.emit('region', region);
    }
  }, [socket, region]);

  useEffect(() => {
    if (socket) {
      socket.emit('username', username);
    }
  }, [socket, username]);

  return { status, isConnected, isSharing, setIsSharing };
}

export default useShareLivePosition;
