import { MicrogenClient } from '@microgen/sdk';

export const microgen = new MicrogenClient({
  apiKey: import.meta.env.VITE_MICROGEN_API_KEY,
});
