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

/**
 * An object containing fields for each die type (d4, d6, d8, d10, d12, d20, d100 and dF for fudge dice),
 * listing how often that type of die should be rolled.
 * It also containts a constant modifier value that should be added to the final result.
 */
export class RollRequest {
	private _d4 = 0;
	private _d6 = 0;
	private _d8 = 0;
	private _d10 = 0;
	private _d12 = 0;
	private _d20 = 0;
	private _d100 = 0;
	private _dF = 0;
	private _modifier = 0;
	private _unusedParts?: string;

	set d4(value: number) {
		if (value > 0) {
			this._d4 = value;
		}
	}

	get d4(): number {
		return this._d4;
	}

	set d6(value: number) {
		if (value > 0) {
			this._d6 = value;
		}
	}

	get d6(): number {
		return this._d6;
	}

	set d8(value: number) {
		if (value > 0) {
			this._d8 = value;
		}
	}

	get d8(): number {
		return this._d8;
	}

	set d10(value: number) {
		if (value > 0) {
			this._d10 = value;
		}
	}

	get d10(): number {
		return this._d10;
	}

	set d12(value: number) {
		if (value > 0) {
			this._d12 = value;
		}
	}

	get d12(): number {
		return this._d12;
	}

	set d20(value: number) {
		if (value > 0) {
			this._d20 = value;
		}
	}

	get d20(): number {
		return this._d20;
	}

	set d100(value: number) {
		if (value > 0) {
			this._d100 = value;
		}
	}

	get d100(): number {
		return this._d100;
	}

	set dF(value: number) {
		if (value > 0) {
			this._dF = value;
		}
	}

	get dF(): number {
		return this._dF;
	}

	set modifier(value: number) {
		this._modifier = value;
	}

	get modifier(): number {
		return this._modifier;
	}

	set unusedParts(value: string | undefined) {
		this._unusedParts = value;
	}

	get unusedParts(): string | undefined {
		return this._unusedParts;
	}

	containsRolls(): boolean {
		return (
			this.d4 > 0 ||
			this.d6 > 0 ||
			this.d8 > 0 ||
			this.d10 > 0 ||
			this.d100 > 0 ||
			this.d12 > 0 ||
			this.d20 > 0 ||
			this.dF > 0
		);
	}

	stringify(includeModifier = true, separator = ", "): string {
		const parts: string[] = [];
		if (this.d4) {
			parts.push(`${this.d4}D4`);
		}
		if (this.d6) {
			parts.push(`${this.d6}D6`);
		}
		if (this.d8) {
			parts.push(`${this.d8}D8`);
		}
		if (this.d100) {
			parts.push(`${this.d10 + this.d100}D10`);
			parts.push(`${this.d100}D00`);
		} else if (this.d10) {
			parts.push(`${this.d10}D10`);
		}
		if (this.d12) {
			parts.push(`${this.d12}D12`);
		}
		if (this.d20) {
			parts.push(`${this.d20}D20`);
		}
		if (this.dF) {
			parts.push(`${this.d12}DF`);
		}
		if (includeModifier && this.modifier) {
			parts.push(`${this.modifier}`);
		}
		return parts.join(separator);
	}
}
