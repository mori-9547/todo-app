type Listeners = {
  [id: string]: {
    event: string;
    element: HTMLElement;
    handler: (e: Event) => void;
  };
};

export class EventListener {
  private readonly listners: Listeners = {};

  add(
    listnerId: string,
    event: string,
    element: HTMLElement,
    handler: (e: Event) => void
  ) {
    this.listners[listnerId] = {
      event,
      element,
      handler,
    };

    element.addEventListener(event, handler);
  }
}
