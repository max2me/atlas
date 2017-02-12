export class Result {
	original: string;
	statement: string;
	condition: string;

	constructor(original: string) {
		this.original = original;
	}

	cleanUp() {
		this.statement = this.cleanString(this.statement);
		this.condition = this.cleanString(this.condition);
	}

	cleanString(str: string) {
		return str.trim().replace(/[,\s]+$/g, '');
	}
}

export class Parser {
	parse(input: string): Result {
		var result = new Result(input);

		var p0 = /(.+)\b(when\b.+)/i;
		if (p0.test(input)) {
			result.statement = input.replace(p0, '$1');
			result.condition = input.replace(p0, '$2');
			result.cleanUp();

			return result;
		}

		var p1 = /(Once\b.+)\bthen\b(.+)/i;
		if (p1.test(input)) {
			result.statement = input.replace(p1, '$2');
			result.condition = input.replace(p1, '$1');
			result.cleanUp();

			return result;
		}

		return null;
	}
}