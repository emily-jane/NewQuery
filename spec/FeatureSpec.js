describe('Feature tests',function(){

  var thermostat = new Thermostat();

  beforeEach(function(){
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('index.html');
    $.holdReady(false);

  });

  it('displays default temperature', function() {
    expect('#temperature').toContainText('20');
  });

  it('increases temperature with up button', function() {
    $('button[data-temp-control="up"]').click();
    expect('#temperature').toContainText('21');
  });

  it('decreases temperature with down button', function() {
    $('button[data-temp-control="down"]').click();
    expect('#temperature').toContainText('19');
  });

  it('temperature can go up and down consistently', function() {
    $('button[data-temp-control="down"]').click();
    expect('#temperature').toContainText('19');
    $('button[data-temp-control="up"]').click();
    expect('#temperature').toContainText('20');
  });

  it('temperature can be reset from higher', function() {
    $('button[data-temp-control="up"]').click();
    expect('#temperature').toContainText('21');
    $('button[data-temp-control="reset"]').click();
    expect('#temperature').toContainText('20');
  });

  it('temperature can be reset from lower', function() {
    $('button[data-temp-control="down"]').click();
    expect('#temperature').toContainText('19');
    $('button[data-temp-control="reset"]').click();
    expect('#temperature').toContainText('20');
  });

  it('max 25 with powersave', function() {
    $('input[type="checkbox"]').prop('checked', true);
    for (i = 0; i < 6; i++) {
      $('button[data-temp-control="up"]').click();
    }
    expect('#temperature').toContainText('25');
  });

  it('min temp is 10', function() {
    $('input[type="checkbox"]').click();
    for (i = 0; i < 12; i++) {
      $('button[data-temp-control="down"]').click();
    }
    expect('#temperature').toContainText('10');
  });

  it('max 32 with powersave off', function() {
    $('input[data-temp-control="powersave"]').click();
    for (i = 0; i < 15; i++) {
      $('button[data-temp-control="up"]').click();
    }
    expect('#temperature').toContainText('32');
  });

  it('powersave set resets to default max', function() {
    $('input[type="checkbox"]').click();
    for (i = 0; i < 15; i++) {
      $('button[data-temp-control="up"]').click();
    }
    expect('#temperature').toContainText('32');
    $('input[data-temp-control="powersave"]').click();
    expect('#temperature').toContainText('25');
  });

  it('is yellow at 20', function() {
    expect('#temperature').toContainText('20');
    expect($('a').css("color")).toBe('rgb(0, 0, 238)')
  });

  it('is red at >= 25', function() {
    $('input[data-temp-control="powersave"]').click();
    for (i = 0; i < 5; i++) {
      $('button[data-temp-control="up"]').click();
    }
    expect('#temperature').toContainText('25');
    expect($('#temperature').css("color")).toBe('rgb(255, 0, 0)')
  });

  it('is green at < 18', function() {
    $('input[type="checkbox"]').click();
    for (i = 0; i < 2; i++) {
      $('button[data-temp-control="down"]').click();
    }
    expect('#temperature').toContainText('18');
    expect($('#temperature').css("color")).toBe('rgb(255, 255, 0)')
  });

    it('calls weather API', function() {
      spyOn($, "getJSON");
      expect($.getJSON).toHaveBeenCalled();
    });

});







