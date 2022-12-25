import '@testing-library/jest-dom';
import audioMock from './jest/__mocks__/audioMock';

// Audio mock
global.Audio = jest.fn().mockImplementation(() => ({
  pause: audioMock.Audio.pause,
  play: audioMock.Audio.play,
}));
