
interface UseCaseType<Request, Response> {
  execute(request?: Request): Promise<Response>;
}

export abstract class UseCase<Request, Response> implements UseCaseType<Request, Response> {
  abstract execute(request?: Request): Promise<Response>;
}
