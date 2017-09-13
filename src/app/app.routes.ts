import {Routes, RouterModule} from '@angular/router';

import { AboutComponent } from './about.component';
import { PodcastComponent } from './podcast.component';
import { SearchComponent } from './search.component';

export const appRoutes: Routes = [
  { path: 'mobile_phones', redirectTo: '/6me/2008-06-04/mobile-phones', pathMatch: 'full'},
  { path: 'dieting', redirectTo: '/6me/2008-06-11/dieting', pathMatch: 'full'},

  { path: 'stress_at_work', redirectTo: '/6me/2008-07-03/stress-at-work', pathMatch: 'full'},

  { path: 'cost_of_living', redirectTo: '/6me/2008-08-13/cost-of-living', pathMatch: 'full'},
  { path: 'credit_crunch', redirectTo: '/6me/2008-08-20/credit-crunch', pathMatch: 'full'},

  { path: 'cryptozoology', redirectTo: '/6me/2008-09-10/cryptozoology', pathMatch: 'full'},
  { path: 'day_trip_with_a_difference', redirectTo: '/6me/2008-09-17/day-trip-with-a-difference', pathMatch: 'full'},
  { path: 'living_abroad', redirectTo: '/6me/2008-09-24/living-abroad', pathMatch: 'full'},

  { path: 'dhaka_traffic', redirectTo: '/6me/2008-10-01/dhaka-traffic', pathMatch: 'full'},
  { path: 'big_hills_and_small_mountains', redirectTo: '/6me/2008-10-08/big-hills-and-small-mountains', pathMatch: 'full'},
  { path: 'problem_pronunciation', redirectTo: '/6me/2008-10-15/problem-pronunciation', pathMatch: 'full'},
  { path: 'asteroid_mission', redirectTo: '/6me/2008-10-22/asteroid-mission', pathMatch: 'full'},
  { path: 'the_wisdom_of_keeping_quiet', redirectTo: '/6me/2008-10-29/the-wisdom-of-keeping-quiet', pathMatch: 'full'},

  { path: 'adult_children', redirectTo: '/6me/2008-11-05/adult-children', pathMatch: 'full'},
  { path: 'poetry', redirectTo: '/6me/2008-11-12/poetry', pathMatch: 'full'},
  { path: 'nuclear_script', redirectTo: '/6me/2008-11-19/nuclear-script', pathMatch: 'full'},
  { path: 'bfm_international_film_festival', redirectTo: '/6me/2008-11-26/bfm-international-film-festival', pathMatch: 'full'},

  { path: 'blind_masseurs', redirectTo: '/6me/2008-12-03/blind-masseurs', pathMatch: 'full'},
  { path: 'aboriginal_cricketer', redirectTo: '/6me/2008-12-10/aboriginal-cricketer', pathMatch: 'full'},
  { path: 'jargon_busters', redirectTo: '/6me/2008-12-24/jargon-busters', pathMatch: 'full'},
  { path: 'warm_hands_warm_heart', redirectTo: '/6me/2008-12-31/warm-hands-warm-heart', pathMatch: 'full'},



  { path: 'academic_to_activist', redirectTo: '/6me/2009-01-07/academic-to-activist', pathMatch: 'full'},
  { path: 'destined_to_be_a_writer', redirectTo: '/6me/2009-01-14/destined-to-be-a-writer', pathMatch: 'full'},
  { path: 'school_for_ex-soldiers', redirectTo: '/6me/2009-01-21/school-for-ex-soldiers', pathMatch: 'full'},
  { path: 'obama_inauguration_party', redirectTo: '/6me/2009-01-28/obama-inauguration-party', pathMatch: 'full'},

  { path: 'private_fostering', redirectTo: '/6me/2009-02-04/private-fostering', pathMatch: 'full'},
  { path: 'mr_smith_or_john', redirectTo: '/6me/2009-02-11/mr-smith-or-john', pathMatch: 'full'},
  { path: 'barbies_50th_anniversary', redirectTo: '/6me/2009-02-18/barbies-50th-anniversary', pathMatch: 'full'},
  { path: 'love_drug', redirectTo: '/6me/2009-02-25/love-drug', pathMatch: 'full'},

  { path: 'cutting_down_eating_up', redirectTo: '/6me/2009-03-05/cutting-down-eating-up', pathMatch: 'full'},
  { path: 'disappearing_words', redirectTo: '/6me/2009-03-12/disappearing-words', pathMatch: 'full'},
  { path: 'keeping_in_touch', redirectTo: '/6me/2009-03-19/keeping-in-touch', pathMatch: 'full'},
  { path: 'a_good_night_rest', redirectTo: '/6me/2009-03-26/a-good-night-rest', pathMatch: 'full'},

  { path: 'april_fools_day', redirectTo: '/6me/2009-04-02/april-fools-day', pathMatch: 'full'},
  { path: 'happiness', redirectTo: '/6me/2009-04-09/happiness', pathMatch: 'full'},
  { path: 'staycations', redirectTo: '/6me/2009-04-16/staycations', pathMatch: 'full'},
  { path: 'st_georges_day', redirectTo: '/6me/2009-04-23/st-georges-day', pathMatch: 'full'},
  { path: 'smells_and_memories', redirectTo: '/6me/2009-04-30/smells-and-memories', pathMatch: 'full'},

  { path: 'horoscopes', redirectTo: '/6me/2009-05-07/horoscopes', pathMatch: 'full'},
  { path: 'spring_cleaning', redirectTo: '/6me/2009-05-14/spring-cleaning', pathMatch: 'full'},
  { path: 'fighting_poor_sanitation', redirectTo: '/6me/2009-05-21/fighting-poor-sanitation', pathMatch: 'full'},
  { path: 'workaholism', redirectTo: '/6me/2009-05-28/workaholism', pathMatch: 'full'},

  { path: 'house_swap', redirectTo: '/6me/2009-06-04/house-swap', pathMatch: 'full'},
  { path: 'dancing_into_old_age', redirectTo: '/6me/2009-06-11/dancing-into-old-age', pathMatch: 'full'},
  { path: 'going_gliding', redirectTo: '/6me/2009-06-18/going-gliding', pathMatch: 'full'},
  { path: 'lonely_bug', redirectTo: '/6me/2009-06-25/lonely-bug', pathMatch: 'full'},

  { path: 'gold_vending_machine', redirectTo: '/6me/2009-07-02/gold-vending-machine', pathMatch: 'full'},
  { path: 'aussie_town_gets_own_money', redirectTo: '/6me/2009-07-09/aussie-town-gets-own-money', pathMatch: 'full'},
  { path: 'tanning', redirectTo: '/6me/2009-07-16/tanning', pathMatch: 'full'},

  /*{ path: '', redirectTo: '/6me/2009-/', pathMatch: 'full'},
   { path: '', redirectTo: '/6me/2009-/', pathMatch: 'full'},
   { path: '', redirectTo: '/6me/2009-/', pathMatch: 'full'},
   { path: '', redirectTo: '/6me/2009-/', pathMatch: 'full'},
   { path: '', redirectTo: '/6me/2009-/', pathMatch: 'full'},
   { path: '', redirectTo: '/6me/2009-/', pathMatch: 'full'},
   { path: '', redirectTo: '/6me/2009-/', pathMatch: 'full'},
   { path: '', redirectTo: '/6me/2009-/', pathMatch: 'full'},
   { path: '', redirectTo: '/6me/2009-/', pathMatch: 'full'},
   { path: '', redirectTo: '/6me/2009-/', pathMatch: 'full'},
   { path: '', redirectTo: '/6me/2009-/', pathMatch: 'full'},
   { path: '', redirectTo: '/6me/2009-/', pathMatch: 'full'},
   { path: '', redirectTo: '/6me/2009-/', pathMatch: 'full'},
   { path: '', redirectTo: '/6me/2009-/', pathMatch: 'full'},
   { path: '', redirectTo: '/6me/2009-/', pathMatch: 'full'},
   { path: '', redirectTo: '/6me/2009-/', pathMatch: 'full'},
   { path: '', redirectTo: '/6me/2009-/', pathMatch: 'full'},
   { path: '', redirectTo: '/6me/2009-/', pathMatch: 'full'},
   { path: '', redirectTo: '/6me/2009-/', pathMatch: 'full'},
   { path: '', redirectTo: '/6me/2009-/', pathMatch: 'full'},
   { path: '', redirectTo: '/6me/2009-/', pathMatch: 'full'},
   { path: '', redirectTo: '/6me/2009-/', pathMatch: 'full'},
   { path: '', redirectTo: '/6me/2009-/', pathMatch: 'full'},*/

  { path: 'about', component: AboutComponent},
  { path: '', redirectTo: '/6me/2009-07-23/couch-surfing', pathMatch: 'full'},
  { path: ':rubric/:date/:route', component: PodcastComponent},
  { path: 'search', component: SearchComponent},
];
