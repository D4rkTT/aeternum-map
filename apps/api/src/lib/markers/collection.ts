import type { Collection, Document } from 'mongodb';
import type { MarkerDTO } from 'static';
import { getCollection, getDb } from '../db.js';

export function getMarkersCollection(): Collection<MarkerDTO> {
  return getCollection<MarkerDTO>('markers');
}

function ensureMarkersIndexes() {
  return Promise.all([
    getMarkersCollection().createIndexes([{ key: { type: 1, position: 1 } }], {
      unique: true,
    }),
    getMarkersCollection().createIndexes([{ key: { isPrivate: 1 } }]),
    getMarkersCollection().createIndexes([
      { key: { isPrivate: 1, userId: 1 } },
    ]),
    getMarkersCollection().createIndexes([{ key: { createdAt: -1 } }]),
    getMarkersCollection().createIndexes([
      { key: { position: '2d' }, min: 0, max: 14336 },
    ]),
  ]);
}

function ensureMarkersSchema(): Promise<Document> {
  return getDb().command({
    collMod: 'markers',
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'Marker',
        properties: {
          _id: {
            bsonType: 'objectId',
          },
          type: {
            bsonType: 'string',
          },
          map: {
            bsonType: 'string',
          },
          position: {
            bsonType: 'array',
            items: {
              bsonType: 'double',
            },
          },
          name: {
            bsonType: 'string',
          },
          level: {
            bsonType: 'int',
          },
          chestType: {
            bsonType: 'string',
          },
          tier: {
            bsonType: 'int',
          },
          size: {
            bsonType: 'string',
          },
          description: {
            bsonType: 'string',
          },
          userId: {
            bsonType: 'string',
          },
          username: {
            bsonType: 'string',
          },
          screenshotFilename: {
            bsonType: 'string',
          },
          comments: {
            bsonType: 'int',
          },
          issues: {
            bsonType: 'int',
          },
          isPrivate: {
            bsonType: 'bool',
          },
          updatedAt: {
            bsonType: 'date',
          },
          createdAt: {
            bsonType: 'date',
          },
        },
        additionalProperties: false,
        required: ['type', 'position', 'createdAt'],
      },
    },
  });
}

export function initMarkersCollection() {
  return Promise.all([ensureMarkersIndexes(), ensureMarkersSchema()]);
}
