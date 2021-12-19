type Listeners = {
  [id: string]: {
    event: string;
    element: HTMLElement;
    handler: (e: Event) => void;
  };
};

export class EventListener {
  private readonly listeners: Listeners = {};

  add(
    listnerId: string,
    event: string,
    element: HTMLElement,
    handler: (e: Event) => void
  ) {
    this.listeners[listnerId] = {
      event,
      element,
      handler,
    };

    element.addEventListener(event, handler);
  }

  remove(listnerId: string) {
    const lisntener = this.listeners[listnerId];

    if (!lisntener) return;

    lisntener.element.removeEventListener(lisntener.event, lisntener.handler);
    delete this.listeners[listnerId];
  }
}
