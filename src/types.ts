/**
 * The sizes of dice that could be requested.
 * <p/>
 * Demiplane Nexus doesn't currently support a game with d100s (though the api does respond when requesting a d100
 * - or a d5, a d66, or a d420). So while 1d100 is a possible roll request, they may also use 1d10+1d00 or 1d10+1d%
 * or something else in the future.
 * <p/>
 * They also don't support any games with Fudge dice and the api doesn't work for dF yet. Since Pixels do offer
 * Fudge dice though, I'm going with my best guess as to what the Demiplane syntax may be if they ever do start
 * supporting Fudge dice.
 */
export type DiceSize = 4 | 6 | 8 | 10 | 12 | 20 | 100 | "F" | "unknown";
