// we can set any values like string and number 
// by default it starts with zero and adds one as you go up or you can give value 
// we can add const before enum to make the code shorter 
const enum SeatChoice {
    AISLE,
    MIDDLE = 10,
    WINDOW ,
    FOURTH 
}

const hcSeat = SeatChoice.AISLE