import type { Component } from "vue";

export interface Widget {
  id: number
  x: number,
  y: number,
  h: number,
  w: number,
  component: Component,
  props: () => Record<string, any>
}