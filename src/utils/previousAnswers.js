module.exports = {
  assignPreviousValue: (usePreviousParam, pp, gp, ep, sp, cp) => {
    this.usePrevious = usePreviousParam;
    this.platinum = pp;
    this.gold = gp;
    this.electrum = ep;
    this.silver = sp;
    this.copper = cp;
  },
  usePrevious: false,
  platinum: 0,
  gold: 0,
  electrum: 0,
  silver: 0,
  copper: 0,
  logValues: () => {
    console.log(
      this.usePrevious,
      this.platinum,
      this.gold,
      this.electrum,
      this.silver,
      this.copper
    );
  },
};
