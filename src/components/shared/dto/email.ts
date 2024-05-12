export default class EmailDTO {
  constructor(
    from,
    subject,
    body
  ) {
    this.from = from;
    this.subject = subject;
    this.body = body;
  }
}
