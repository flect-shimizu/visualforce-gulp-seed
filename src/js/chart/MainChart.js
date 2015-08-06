class MainChart extends Chart{
  constructor(selector) {
    super();
    this.options = {
      bindto: selector,
      data: {
        type: "bar",
        columns:[]
      },
      bar: {
        width: {
          ratio:0.5
        }
      }
    }
  }
}