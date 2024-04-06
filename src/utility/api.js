import { MimicLogs, MimicMetrics } from './utils';

export const fetchPreviousLogs = async ({ startTs, endTs, limit }) => { 
  try {
    const logs = await MimicLogs.fetchPreviousLogs({ startTs, endTs, limit });
    return logs;
  } catch (error) {
    console.error('Error fetching logs:', error);
    throw error;
  }
};

export const subscribeToLiveLogs = (callback) => {
  try {
    const unsubscribe = MimicLogs.subscribeToLiveLogs(callback);
    return unsubscribe;
  } catch (error) {
    console.error('Error subscribing to live logs:', error);
    throw error;
  }
};

export const fetchMetrics = async ({ startTs, endTs }) => {
  try {
    const metrics = await MimicMetrics.fetchMetrics({ startTs, endTs });
    return metrics;
  } catch (error) {
    console.error('Error fetching metrics:', error);
    throw error;
  }
};
