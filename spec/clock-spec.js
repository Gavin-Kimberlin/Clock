describe('Clock', function(){
  it('should add 1 to the seconds place every 1000 milliseconds.', function() {
    var newClock = new Clock (3, 52, 30)
    expect(this.seconds).toEqual(30);
  });

  it('should add 1 to the minute place every 60 seconds and reset the seconds place.', function() {
    var newClock = new Clock (3, 52, 30)
    expect(this.minutes).toEqual(52);
  });

  it('should add 1 to the hours place every 60 minutes and reset the minutes place.', function() {
    var newClock = new Clock (3, 52, 30)
    expect(this.hours).toEqual(3);
  });
})
