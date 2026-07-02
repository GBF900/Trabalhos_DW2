import { CanDeactivateFn } from '@angular/router';

export interface PodeSair{
podeSair:()=>boolean;
}

export const CanDeactivateGuard:CanDeactivateFn<PodeSair>=(component)=>{

return component.podeSair();
}