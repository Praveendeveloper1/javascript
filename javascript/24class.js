class language1 {
  //all declaration
  constructor(name, country) {
    this.name = name;
    this.country = country;
  }
  greet = () => {
    return `Say Hi to ${name}`;
  };
}
var Hindi = new language1("hindi", "India");
