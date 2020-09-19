import { VueInstance } from './iUtils';

export function isArray(target: any): boolean {
  return Array.isArray(target);
}

export function isObject(target: any): boolean {
  return Object.prototype.toString.call(target) === 'object Object';
}

export function isEqual<T>(a: T, b: T): boolean {
  if(a === b) {
    return true;
  }
  if(typeof a === 'object' && typeof b === 'object') {
    if(Array.isArray(a) && Array.isArray(b)) {
      for(let i in b) {
        if(!isEqual<any>(a[i], b[i])) {
          return false;
        }
      }
      return true;
    }else {

    }
  }
  return false;
}

export function oneOf<T>(value: T, validList: T[]): boolean {
  if(typeof value === 'object') {
    validList.forEach(item => {
      if(isEqual<T>(value, item)) {
        return true;
      }
    })
    return false;
  }else {
    return validList.indexOf(value) > -1;
  }
}

export function getRandomId(): string {
  const s: string[] = [];
  const hexDigits = '0123456789abcdef';
  let i = 0;
  while(i < 10) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 16), 1);
    i++;
  }
  return s.join('');
}

export function findTargetChildren<T extends VueInstance>(current: T, parentName: T, childName: T): T[] | undefined {
  if(!current.$children) return;
  if(!current.$children.length) return [];
  const targetChildren: T[] = [];
  function find(children: T[]) {
    children.forEach((child: T) => {
      if(child.$options.name === childName && child.$parent.$options.name === parentName) {
        targetChildren.push(child);
      }else {
        if(child.$children) {
          find(child.$children);
        }
      }
    });
  }
  find(current.$children);
  return targetChildren;
}