import { transition, trigger, style, animate, query, group } from "@angular/animations";

const fadeInAnimation = trigger('routeAnimations', [
    transition('* <=> *', [
        query(':enter, :leave', style({ position: 'fixed', width: '100%' }), {optional: true}),
        group([
            query(':enter', [
                style({ transform: 'scale(0)' }),
                animate('0.5s ease-in-out', style({ transform: 'scale(1)' }))
            ], { optional: true }),
            query(':leave', [
                style({ opacity: 1 }),
                animate('0.5s ease-in-out', style({ opacity: 0 }))]
                , { optional: true }),
        ])
    ])
])

export default fadeInAnimation;