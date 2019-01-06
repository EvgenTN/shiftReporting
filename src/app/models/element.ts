import { Component } from '@angular/core';

export class Element {
  component: any;
  name?: string;
  key?: string;
  value?: string;
  options?: string[];

  constructor(options: {
    component?: any,
    name?: string,
    key?: string,
    value?: string,
    options?: string[]
  } = {}
  ) {
    this.component = options.component;
    this.name = options.name;
    this.key = options.key;
    this.value = options.value;
    this.options = options.options;
  }
}
