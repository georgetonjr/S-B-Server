import express, { Express } from 'express';
import setupProviders from './providers';

export const app = async (): Promise<Express> => {
  const expressApp = express();
  expressApp.use(express.json());
  await setupProviders();
  return expressApp;
};
