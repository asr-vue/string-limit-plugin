import Vue from 'vue';

declare module 'vue/types/vue' {
  interface Vue {
    $stringLimit: (value: string, cLimit?: number, cSuffix?: string) => void;
  }
}
