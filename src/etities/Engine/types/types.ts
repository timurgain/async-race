export type EngineResponse = {
  velocity?: string | number;
  distance?: string | number;
  success?: boolean;
};

export enum EngineStatus {
  STARTED = 'started',
  STOPPED = 'stopped',
  DRIVE = 'drive',
}
