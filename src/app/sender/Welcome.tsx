import type { AccountDTO } from '../contexts/UserContext';
import { useAccount } from '../contexts/UserContext';
import steamSrc from '../components/User/steam.png';
import { fetchJSON } from '../utils/api';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import styles from './Welcome.module.css';

const { VITE_API_ENDPOINT = '' } = import.meta.env;

function Welcome(): JSX.Element {
  const [verifyingSessionId, setVerifyingSessionId] = useState('');
  const { setAccount } = useAccount();

  useEffect(() => {
    if (!verifyingSessionId) {
      return;
    }
    const toastId = toast('Waiting for Steam Sign In', {
      type: 'info',
      autoClose: false,
    });
    const intervalId = setInterval(async () => {
      try {
        const init: RequestInit = {};
        if (verifyingSessionId) {
          init.headers = {
            'x-session-id': verifyingSessionId,
            'x-prevent-logout': 'true',
          };
        }
        const newAccount = await fetchJSON<AccountDTO>(
          `/api/auth/account`,
          init
        );
        setAccount(newAccount);
        setVerifyingSessionId('');
      } catch (error) {
        // Keep waiting
      }
    }, 3000);
    return () => {
      clearInterval(intervalId);
      toast.dismiss(toastId);
    };
  }, [verifyingSessionId]);

  const handleLogin = async () => {
    const newSessionId = await fetchJSON<string>('/api/auth/session');

    const url = `${VITE_API_ENDPOINT}/api/auth/steam?sessionId=${newSessionId}`;
    overwolf.utils.openUrlInDefaultBrowser(url);

    setVerifyingSessionId(newSessionId);
  };

  return (
    <div className={styles.welcome}>
      <p>
        Connect to{' '}
        <a href="https://aeternum-map.gg" target="_blank">
          https://aeternum-map.gg
        </a>
        , an interactive New World map with routes and community managed
        markers.
      </p>
      <ul>
        <li>🚀 Live Tracking of your In-Game position</li>
        <li>🤗 See your friends by using the same token</li>
        <li>🔀 Farming/Marker Routes</li>
        <li>✅ Check markers as done (like lore documents)</li>
        <li>🗺️ Minimap view</li>
        <li>
          🤷‍♂️{' '}
          <a
            href="https://discord.com/channels/320539672663031818/896014490808745994/911185526210576394"
            target="_blank"
          >
            Conforms to AGS ToS
          </a>
        </li>
      </ul>
      <button onClick={handleLogin}>
        <img src={steamSrc} alt="Sign in through Steam" />
      </button>
    </div>
  );
}

export default Welcome;
