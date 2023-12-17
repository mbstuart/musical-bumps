export interface BumpsConfig {
    averageTimeInSeconds: number;
    marginInSeconds: number;
    timeToAutoRestartInSeconds: number
}

export const DEFAULT_BUMPS_CONFIG: BumpsConfig = {
    averageTimeInSeconds: 20, 
    marginInSeconds: 3,
    timeToAutoRestartInSeconds: 5
}