import { vi } from 'vitest';

const cryptoMock = { randomUUID: vi.fn(() => Math.random()) };
vi.stubGlobal("crypto", cryptoMock);