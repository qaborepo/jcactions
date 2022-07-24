class Delay {
  for(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
export default new Delay();
