class AssignPreviousValue {
    constructor() {
        this.usePrevious = false,
        this.platinum = 0,
        this.gold = 0,
        this.electrum = 0,
        this.silver = 0,
        this.copper = 0
    }
    set(usePreviousParam, pp, gp, ep, sp, cp){
        this.usePrevious = usePreviousParam,
        this.platinum = pp,
        this.gold = gp,
        this.electrum = ep,
        this.silver = sp,
        this.copper = cp
    }
    get data(){
        return assignPreviousValue;
    }
}

const assignPreviousValue = new AssignPreviousValue()
module.exports = assignPreviousValue