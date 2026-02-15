export class HttpException extends Error {
    public statusCode: number;
    public override message: string;

    constructor(statusCode: number, message: string) {
        super(message);
        this.statusCode = statusCode;
        this.message = message;
        this.name = this.constructor.name;
    }
}

export class NotFoundException extends HttpException {
    constructor(message: string = 'Resource not found') {
        super(404, message);
    }
}

export class BadRequestException extends HttpException {
    constructor(message: string = 'Bad request') {
        super(400, message);
    }
}

export class InternalServerErrorException extends HttpException {
    constructor(message: string = 'Internal server error') {
        super(500, message);
    }
}

export class UnauthorizedException extends HttpException {
    constructor(message: string = 'Unauthorized') {
        super(401, message);
    }
}

export class ForbiddenException extends HttpException {
    constructor(message: string = 'Forbidden') {
        super(403, message);
    }
}

export class DatabaseException extends HttpException {
    constructor(message: string = 'Database error') {
        super(500, message);
    }
}