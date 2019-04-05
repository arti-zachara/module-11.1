function Phone(brand, price, color) {
  this.brand = brand;
  this.price = price;
  this.color = color;
}
Phone.prototype.printInfo = function() {
  console.log(
    "The phone brand is " +
      this.brand +
      ", color is " +
      this.color +
      " and the price is " +
      this.price +
      "."
  );
};
var iPhone6S = new Phone("Apple", 2250, "silver");
var SamsungGalaxyS6 = new Phone("Samsung", 1990, "black");
var OnePlusOne = new Phone("One", 999, "yellow");

iPhone6S.printInfo();

Phone.prototype.displayInfo = function() {
  var results = document.getElementById("results");
  results.insertAdjacentHTML(
    "beforeend",
    "<p>The phone brand is " +
      this.brand +
      ", color is " +
      this.color +
      " and the price is " +
      this.price +
      ".</p>"
  );
};
iPhone6S.displayInfo();
SamsungGalaxyS6.displayInfo();
OnePlusOne.displayInfo();
