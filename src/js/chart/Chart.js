class Chart {
  show(data) {
    this.options.data.columns = data;
    this.chart =  c3.generate(this.options)
  }
  update(data) {
    this.chart.update(data)
  }
}

