import type {PageServerLoad} from './$types'

export const load: PageServerLoad = () => {
    const rand = Math.floor(Math.random() * 90) + 10;
    return {
        random_name: `MoanaLuvr` + rand
    }
}
