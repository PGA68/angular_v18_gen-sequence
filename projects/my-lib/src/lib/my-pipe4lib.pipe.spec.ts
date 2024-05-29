import { MyPipe4libPipe } from './my-pipe4lib.pipe';

describe('MyPipe4libPipe', () => {
  it('create an instance', () => {
    const pipe = new MyPipe4libPipe();
    expect(pipe).toBeTruthy();
  });
});
