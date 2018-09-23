import './font.css'
import { css } from 'react-emotion'

export default ({
  theme: { textDarkColor, primaryColor, layoutDivide },
}) => css`
  color: ${textDarkColor};
  font-family: Montserrat, 'Helvetica Neue', Helvetica, Arial, 'Lantinghei SC',
    sans-serif;
  font-size: 1rem;

  h1 {
    font-size: 2em;
  }
  h2 {
    font-size: 1.5em;
  }
  h3 {
    font-size: 1.17em;
  }
  *:matches(h4, h5, h6) {
    font-size: 1em;
  }

  *:matches(h1, h2, h3, h4, h5, h6) a {
    color: inherit;
    text-decoration: inherit;
  }

  a {
    color: ${primaryColor};
  }

  p {
    margin-bottom: 1em;
  }
  p:last-child {
    margin-bottom: 0;
  }

  @media (max-width: ${layoutDivide}) {
    font-size: 0.9rem;
  }

  [class^='material-icon-sharp-'],
  [class*=' material-icon-sharp-'] {
    /* use !important to prevent issues with browser extensions that change fonts */
    font-family: 'MaterialIconSharp' !important;
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;

    /* Better Font Rendering =========== */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .material-icon-sharp-3d_rotation:before {
    content: '\\e900';
  }
  .material-icon-sharp-4k:before {
    content: '\\e901';
  }
  .material-icon-sharp-360:before {
    content: '\\e902';
  }
  .material-icon-sharp-access_alarm:before {
    content: '\\e903';
  }
  .material-icon-sharp-access_alarms:before {
    content: '\\e904';
  }
  .material-icon-sharp-accessibility:before {
    content: '\\e905';
  }
  .material-icon-sharp-accessibility_new:before {
    content: '\\e906';
  }
  .material-icon-sharp-accessible:before {
    content: '\\e907';
  }
  .material-icon-sharp-accessible_forward:before {
    content: '\\e908';
  }
  .material-icon-sharp-access_time:before {
    content: '\\e909';
  }
  .material-icon-sharp-account_balance:before {
    content: '\\e90a';
  }
  .material-icon-sharp-account_balance_wallet:before {
    content: '\\e90b';
  }
  .material-icon-sharp-account_box:before {
    content: '\\e90c';
  }
  .material-icon-sharp-account_circle:before {
    content: '\\e90d';
  }
  .material-icon-sharp-ac_unit:before {
    content: '\\e90e';
  }
  .material-icon-sharp-adb:before {
    content: '\\e90f';
  }
  .material-icon-sharp-add:before {
    content: '\\e910';
  }
  .material-icon-sharp-add_alarm:before {
    content: '\\e911';
  }
  .material-icon-sharp-add_alert:before {
    content: '\\e912';
  }
  .material-icon-sharp-add_a_photo:before {
    content: '\\e913';
  }
  .material-icon-sharp-add_box:before {
    content: '\\e914';
  }
  .material-icon-sharp-add_circle:before {
    content: '\\e915';
  }
  .material-icon-sharp-add_circle_outline:before {
    content: '\\e916';
  }
  .material-icon-sharp-add_comment:before {
    content: '\\e917';
  }
  .material-icon-sharp-add_location:before {
    content: '\\e918';
  }
  .material-icon-sharp-add_photo_alternate:before {
    content: '\\e919';
  }
  .material-icon-sharp-add_shopping_cart:before {
    content: '\\e91a';
  }
  .material-icon-sharp-add_to_home_screen:before {
    content: '\\e91b';
  }
  .material-icon-sharp-add_to_photos:before {
    content: '\\e91c';
  }
  .material-icon-sharp-add_to_queue:before {
    content: '\\e91d';
  }
  .material-icon-sharp-adjust:before {
    content: '\\e91e';
  }
  .material-icon-sharp-airline_seat_flat:before {
    content: '\\e91f';
  }
  .material-icon-sharp-airline_seat_flat_angled:before {
    content: '\\e920';
  }
  .material-icon-sharp-airline_seat_individual_suite:before {
    content: '\\e921';
  }
  .material-icon-sharp-airline_seat_legroom_extra:before {
    content: '\\e922';
  }
  .material-icon-sharp-airline_seat_legroom_normal:before {
    content: '\\e923';
  }
  .material-icon-sharp-airline_seat_legroom_reduced:before {
    content: '\\e924';
  }
  .material-icon-sharp-airline_seat_recline_extra:before {
    content: '\\e925';
  }
  .material-icon-sharp-airline_seat_recline_normal:before {
    content: '\\e926';
  }
  .material-icon-sharp-airplanemode_active:before {
    content: '\\e927';
  }
  .material-icon-sharp-airplanemode_inactive:before {
    content: '\\e928';
  }
  .material-icon-sharp-airplay:before {
    content: '\\e929';
  }
  .material-icon-sharp-airport_shuttle:before {
    content: '\\e92a';
  }
  .material-icon-sharp-alarm:before {
    content: '\\e92b';
  }
  .material-icon-sharp-alarm_add:before {
    content: '\\e92c';
  }
  .material-icon-sharp-alarm_off:before {
    content: '\\e92d';
  }
  .material-icon-sharp-alarm_on:before {
    content: '\\e92e';
  }
  .material-icon-sharp-album:before {
    content: '\\e92f';
  }
  .material-icon-sharp-all_inbox:before {
    content: '\\e930';
  }
  .material-icon-sharp-all_inclusive:before {
    content: '\\e931';
  }
  .material-icon-sharp-all_out:before {
    content: '\\e932';
  }
  .material-icon-sharp-alternate_email:before {
    content: '\\e933';
  }
  .material-icon-sharp-android:before {
    content: '\\e934';
  }
  .material-icon-sharp-announcement:before {
    content: '\\e935';
  }
  .material-icon-sharp-apps:before {
    content: '\\e936';
  }
  .material-icon-sharp-archive:before {
    content: '\\e937';
  }
  .material-icon-sharp-arrow_back:before {
    content: '\\e938';
  }
  .material-icon-sharp-arrow_back_ios:before {
    content: '\\e939';
  }
  .material-icon-sharp-arrow_downward:before {
    content: '\\e93a';
  }
  .material-icon-sharp-arrow_drop_down:before {
    content: '\\e93b';
  }
  .material-icon-sharp-arrow_drop_down_circle:before {
    content: '\\e93c';
  }
  .material-icon-sharp-arrow_drop_up:before {
    content: '\\e93d';
  }
  .material-icon-sharp-arrow_forward:before {
    content: '\\e93e';
  }
  .material-icon-sharp-arrow_forward_ios:before {
    content: '\\e93f';
  }
  .material-icon-sharp-arrow_left:before {
    content: '\\e940';
  }
  .material-icon-sharp-arrow_right:before {
    content: '\\e941';
  }
  .material-icon-sharp-arrow_right_alt:before {
    content: '\\e942';
  }
  .material-icon-sharp-arrow_upward:before {
    content: '\\e943';
  }
  .material-icon-sharp-art_track:before {
    content: '\\e944';
  }
  .material-icon-sharp-aspect_ratio:before {
    content: '\\e945';
  }
  .material-icon-sharp-assessment:before {
    content: '\\e946';
  }
  .material-icon-sharp-assignment:before {
    content: '\\e947';
  }
  .material-icon-sharp-assignment_ind:before {
    content: '\\e948';
  }
  .material-icon-sharp-assignment_late:before {
    content: '\\e949';
  }
  .material-icon-sharp-assignment_return:before {
    content: '\\e94a';
  }
  .material-icon-sharp-assignment_returned:before {
    content: '\\e94b';
  }
  .material-icon-sharp-assignment_turned_in:before {
    content: '\\e94c';
  }
  .material-icon-sharp-assistant:before {
    content: '\\e94d';
  }
  .material-icon-sharp-assistant_photo:before {
    content: '\\e94e';
  }
  .material-icon-sharp-atm:before {
    content: '\\e94f';
  }
  .material-icon-sharp-attach_file:before {
    content: '\\e950';
  }
  .material-icon-sharp-attachment:before {
    content: '\\e951';
  }
  .material-icon-sharp-attach_money:before {
    content: '\\e952';
  }
  .material-icon-sharp-audiotrack:before {
    content: '\\e953';
  }
  .material-icon-sharp-autorenew:before {
    content: '\\e954';
  }
  .material-icon-sharp-av_timer:before {
    content: '\\e955';
  }
  .material-icon-sharp-backspace:before {
    content: '\\e956';
  }
  .material-icon-sharp-backup:before {
    content: '\\e957';
  }
  .material-icon-sharp-ballot:before {
    content: '\\e958';
  }
  .material-icon-sharp-bar_chart:before {
    content: '\\e959';
  }
  .material-icon-sharp-battery_20 .path1:before {
    content: '\\e95a';
    color: rgb(0, 0, 0);
  }
  .material-icon-sharp-battery_20 .path2:before {
    content: '\\e95b';
    margin-left: -1em;
    color: rgb(0, 0, 0);
    opacity: 0.3;
  }
  .material-icon-sharp-battery_30 .path1:before {
    content: '\\e95c';
    color: rgb(0, 0, 0);
    opacity: 0.3;
  }
  .material-icon-sharp-battery_30 .path2:before {
    content: '\\e95d';
    margin-left: -1em;
    color: rgb(0, 0, 0);
  }
  .material-icon-sharp-battery_50 .path1:before {
    content: '\\e95e';
    color: rgb(0, 0, 0);
    opacity: 0.3;
  }
  .material-icon-sharp-battery_50 .path2:before {
    content: '\\e95f';
    margin-left: -1em;
    color: rgb(0, 0, 0);
  }
  .material-icon-sharp-battery_60 .path1:before {
    content: '\\e960';
    color: rgb(0, 0, 0);
    opacity: 0.3;
  }
  .material-icon-sharp-battery_60 .path2:before {
    content: '\\e961';
    margin-left: -1em;
    color: rgb(0, 0, 0);
  }
  .material-icon-sharp-battery_80 .path1:before {
    content: '\\e962';
    color: rgb(0, 0, 0);
    opacity: 0.3;
  }
  .material-icon-sharp-battery_80 .path2:before {
    content: '\\e963';
    margin-left: -1em;
    color: rgb(0, 0, 0);
  }
  .material-icon-sharp-battery_90 .path1:before {
    content: '\\e964';
    color: rgb(0, 0, 0);
    opacity: 0.3;
  }
  .material-icon-sharp-battery_90 .path2:before {
    content: '\\e965';
    margin-left: -1em;
    color: rgb(0, 0, 0);
  }
  .material-icon-sharp-battery_alert:before {
    content: '\\e966';
  }
  .material-icon-sharp-battery_charging_20 .path1:before {
    content: '\\e967';
    color: rgb(0, 0, 0);
  }
  .material-icon-sharp-battery_charging_20 .path2:before {
    content: '\\e968';
    margin-left: -1em;
    color: rgb(0, 0, 0);
    opacity: 0.3;
  }
  .material-icon-sharp-battery_charging_30 .path1:before {
    content: '\\e969';
    color: rgb(0, 0, 0);
    opacity: 0.3;
  }
  .material-icon-sharp-battery_charging_30 .path2:before {
    content: '\\e96a';
    margin-left: -1em;
    color: rgb(0, 0, 0);
  }
  .material-icon-sharp-battery_charging_50 .path1:before {
    content: '\\e96b';
    color: rgb(0, 0, 0);
  }
  .material-icon-sharp-battery_charging_50 .path2:before {
    content: '\\e96c';
    margin-left: -1em;
    color: rgb(0, 0, 0);
    opacity: 0.3;
  }
  .material-icon-sharp-battery_charging_60 .path1:before {
    content: '\\e96d';
    color: rgb(0, 0, 0);
    opacity: 0.3;
  }
  .material-icon-sharp-battery_charging_60 .path2:before {
    content: '\\e96e';
    margin-left: -1em;
    color: rgb(0, 0, 0);
  }
  .material-icon-sharp-battery_charging_80 .path1:before {
    content: '\\e96f';
    color: rgb(0, 0, 0);
    opacity: 0.3;
  }
  .material-icon-sharp-battery_charging_80 .path2:before {
    content: '\\e970';
    margin-left: -1em;
    color: rgb(0, 0, 0);
  }
  .material-icon-sharp-battery_charging_90 .path1:before {
    content: '\\e971';
    color: rgb(0, 0, 0);
    opacity: 0.3;
  }
  .material-icon-sharp-battery_charging_90 .path2:before {
    content: '\\e972';
    margin-left: -1em;
    color: rgb(0, 0, 0);
  }
  .material-icon-sharp-battery_charging_full:before {
    content: '\\e973';
  }
  .material-icon-sharp-battery_full:before {
    content: '\\e974';
  }
  .material-icon-sharp-battery_std:before {
    content: '\\e975';
  }
  .material-icon-sharp-battery_unknown:before {
    content: '\\e976';
  }
  .material-icon-sharp-beach_access:before {
    content: '\\e977';
  }
  .material-icon-sharp-beenhere:before {
    content: '\\e978';
  }
  .material-icon-sharp-block:before {
    content: '\\e979';
  }
  .material-icon-sharp-bluetooth:before {
    content: '\\e97a';
  }
  .material-icon-sharp-bluetooth_audio:before {
    content: '\\e97b';
  }
  .material-icon-sharp-bluetooth_connected:before {
    content: '\\e97c';
  }
  .material-icon-sharp-bluetooth_disabled:before {
    content: '\\e97d';
  }
  .material-icon-sharp-bluetooth_searching:before {
    content: '\\e97e';
  }
  .material-icon-sharp-blur_circular:before {
    content: '\\e97f';
  }
  .material-icon-sharp-blur_linear:before {
    content: '\\e980';
  }
  .material-icon-sharp-blur_off:before {
    content: '\\e981';
  }
  .material-icon-sharp-blur_on:before {
    content: '\\e982';
  }
  .material-icon-sharp-book:before {
    content: '\\e983';
  }
  .material-icon-sharp-bookmark:before {
    content: '\\e984';
  }
  .material-icon-sharp-bookmark_border:before {
    content: '\\e985';
  }
  .material-icon-sharp-bookmarks:before {
    content: '\\e986';
  }
  .material-icon-sharp-border_all:before {
    content: '\\e987';
  }
  .material-icon-sharp-border_bottom:before {
    content: '\\e988';
  }
  .material-icon-sharp-border_clear:before {
    content: '\\e989';
  }
  .material-icon-sharp-border_color .path1:before {
    content: '\\e98a';
    color: rgb(0, 0, 0);
  }
  .material-icon-sharp-border_color .path2:before {
    content: '\\e98b';
    margin-left: -1em;
    color: rgb(0, 0, 0);
    opacity: 0.36;
  }
  .material-icon-sharp-border_horizontal:before {
    content: '\\e98c';
  }
  .material-icon-sharp-border_inner:before {
    content: '\\e98d';
  }
  .material-icon-sharp-border_left:before {
    content: '\\e98e';
  }
  .material-icon-sharp-border_outer:before {
    content: '\\e98f';
  }
  .material-icon-sharp-border_right:before {
    content: '\\e990';
  }
  .material-icon-sharp-border_style:before {
    content: '\\e991';
  }
  .material-icon-sharp-border_top:before {
    content: '\\e992';
  }
  .material-icon-sharp-border_vertical:before {
    content: '\\e993';
  }
  .material-icon-sharp-branding_watermark:before {
    content: '\\e994';
  }
  .material-icon-sharp-brightness_1:before {
    content: '\\e995';
  }
  .material-icon-sharp-brightness_2:before {
    content: '\\e996';
  }
  .material-icon-sharp-brightness_3:before {
    content: '\\e997';
  }
  .material-icon-sharp-brightness_4:before {
    content: '\\e998';
  }
  .material-icon-sharp-brightness_5:before {
    content: '\\e999';
  }
  .material-icon-sharp-brightness_6:before {
    content: '\\e99a';
  }
  .material-icon-sharp-brightness_7:before {
    content: '\\e99b';
  }
  .material-icon-sharp-brightness_auto:before {
    content: '\\e99c';
  }
  .material-icon-sharp-brightness_high:before {
    content: '\\e99d';
  }
  .material-icon-sharp-brightness_low:before {
    content: '\\e99e';
  }
  .material-icon-sharp-brightness_medium:before {
    content: '\\e99f';
  }
  .material-icon-sharp-broken_image:before {
    content: '\\e9a0';
  }
  .material-icon-sharp-brush:before {
    content: '\\e9a1';
  }
  .material-icon-sharp-bubble_chart:before {
    content: '\\e9a2';
  }
  .material-icon-sharp-bug_report:before {
    content: '\\e9a3';
  }
  .material-icon-sharp-build:before {
    content: '\\e9a4';
  }
  .material-icon-sharp-burst_mode:before {
    content: '\\e9a5';
  }
  .material-icon-sharp-business:before {
    content: '\\e9a6';
  }
  .material-icon-sharp-business_center:before {
    content: '\\e9a7';
  }
  .material-icon-sharp-cached:before {
    content: '\\e9a8';
  }
  .material-icon-sharp-cake:before {
    content: '\\e9a9';
  }
  .material-icon-sharp-calendar_today:before {
    content: '\\e9aa';
  }
  .material-icon-sharp-calendar_view_day:before {
    content: '\\e9ab';
  }
  .material-icon-sharp-call:before {
    content: '\\e9ac';
  }
  .material-icon-sharp-call_end:before {
    content: '\\e9ad';
  }
  .material-icon-sharp-call_made:before {
    content: '\\e9ae';
  }
  .material-icon-sharp-call_merge:before {
    content: '\\e9af';
  }
  .material-icon-sharp-call_missed:before {
    content: '\\e9b0';
  }
  .material-icon-sharp-call_missed_outgoing:before {
    content: '\\e9b1';
  }
  .material-icon-sharp-call_received:before {
    content: '\\e9b2';
  }
  .material-icon-sharp-call_split:before {
    content: '\\e9b3';
  }
  .material-icon-sharp-call_to_action:before {
    content: '\\e9b4';
  }
  .material-icon-sharp-camera:before {
    content: '\\e9b5';
  }
  .material-icon-sharp-camera_alt:before {
    content: '\\e9b6';
  }
  .material-icon-sharp-camera_enhance:before {
    content: '\\e9b7';
  }
  .material-icon-sharp-camera_front:before {
    content: '\\e9b8';
  }
  .material-icon-sharp-camera_rear:before {
    content: '\\e9b9';
  }
  .material-icon-sharp-camera_roll:before {
    content: '\\e9ba';
  }
  .material-icon-sharp-cancel:before {
    content: '\\e9bb';
  }
  .material-icon-sharp-cancel_presentation:before {
    content: '\\e9bc';
  }
  .material-icon-sharp-card_giftcard:before {
    content: '\\e9bd';
  }
  .material-icon-sharp-card_membership:before {
    content: '\\e9be';
  }
  .material-icon-sharp-card_travel:before {
    content: '\\e9bf';
  }
  .material-icon-sharp-casino:before {
    content: '\\e9c0';
  }
  .material-icon-sharp-cast:before {
    content: '\\e9c1';
  }
  .material-icon-sharp-cast_connected:before {
    content: '\\e9c2';
  }
  .material-icon-sharp-cast_for_education:before {
    content: '\\e9c3';
  }
  .material-icon-sharp-category:before {
    content: '\\e9c4';
  }
  .material-icon-sharp-cell_wifi .path1:before {
    content: '\\e9c5';
    color: rgb(0, 0, 0);
    opacity: 0.3;
  }
  .material-icon-sharp-cell_wifi .path2:before {
    content: '\\e9c6';
    margin-left: -1em;
    color: rgb(0, 0, 0);
  }
  .material-icon-sharp-center_focus_strong:before {
    content: '\\e9c7';
  }
  .material-icon-sharp-center_focus_weak:before {
    content: '\\e9c8';
  }
  .material-icon-sharp-change_history:before {
    content: '\\e9c9';
  }
  .material-icon-sharp-chat:before {
    content: '\\e9ca';
  }
  .material-icon-sharp-chat_bubble:before {
    content: '\\e9cb';
  }
  .material-icon-sharp-chat_bubble_outline:before {
    content: '\\e9cc';
  }
  .material-icon-sharp-check:before {
    content: '\\e9cd';
  }
  .material-icon-sharp-check_box:before {
    content: '\\e9ce';
  }
  .material-icon-sharp-check_box_outline_blank:before {
    content: '\\e9cf';
  }
  .material-icon-sharp-check_circle:before {
    content: '\\e9d0';
  }
  .material-icon-sharp-check_circle_outline:before {
    content: '\\e9d1';
  }
  .material-icon-sharp-chevron_left:before {
    content: '\\e9d2';
  }
  .material-icon-sharp-chevron_right:before {
    content: '\\e9d3';
  }
  .material-icon-sharp-child_care:before {
    content: '\\e9d4';
  }
  .material-icon-sharp-child_friendly:before {
    content: '\\e9d5';
  }
  .material-icon-sharp-chrome_reader_mode:before {
    content: '\\e9d6';
  }
  .material-icon-sharp-class:before {
    content: '\\e9d7';
  }
  .material-icon-sharp-clear:before {
    content: '\\e9d8';
  }
  .material-icon-sharp-clear_all:before {
    content: '\\e9d9';
  }
  .material-icon-sharp-close:before {
    content: '\\e9da';
  }
  .material-icon-sharp-closed_caption:before {
    content: '\\e9db';
  }
  .material-icon-sharp-cloud:before {
    content: '\\e9dc';
  }
  .material-icon-sharp-cloud_circle:before {
    content: '\\e9dd';
  }
  .material-icon-sharp-cloud_done:before {
    content: '\\e9de';
  }
  .material-icon-sharp-cloud_download:before {
    content: '\\e9df';
  }
  .material-icon-sharp-cloud_off:before {
    content: '\\e9e0';
  }
  .material-icon-sharp-cloud_queue:before {
    content: '\\e9e1';
  }
  .material-icon-sharp-cloud_upload:before {
    content: '\\e9e2';
  }
  .material-icon-sharp-code:before {
    content: '\\e9e3';
  }
  .material-icon-sharp-collections:before {
    content: '\\e9e4';
  }
  .material-icon-sharp-collections_bookmark:before {
    content: '\\e9e5';
  }
  .material-icon-sharp-colorize:before {
    content: '\\e9e6';
  }
  .material-icon-sharp-color_lens:before {
    content: '\\e9e7';
  }
  .material-icon-sharp-comment:before {
    content: '\\e9e8';
  }
  .material-icon-sharp-commute:before {
    content: '\\e9e9';
  }
  .material-icon-sharp-compare:before {
    content: '\\e9ea';
  }
  .material-icon-sharp-compare_arrows:before {
    content: '\\e9eb';
  }
  .material-icon-sharp-compass_calibration:before {
    content: '\\e9ec';
  }
  .material-icon-sharp-computer:before {
    content: '\\e9ed';
  }
  .material-icon-sharp-confirmation_number:before {
    content: '\\e9ee';
  }
  .material-icon-sharp-contact_mail:before {
    content: '\\e9ef';
  }
  .material-icon-sharp-contact_phone:before {
    content: '\\e9f0';
  }
  .material-icon-sharp-contacts:before {
    content: '\\e9f1';
  }
  .material-icon-sharp-contact_support:before {
    content: '\\e9f2';
  }
  .material-icon-sharp-control_camera:before {
    content: '\\e9f3';
  }
  .material-icon-sharp-control_point:before {
    content: '\\e9f4';
  }
  .material-icon-sharp-control_point_duplicate:before {
    content: '\\e9f5';
  }
  .material-icon-sharp-copyright:before {
    content: '\\e9f6';
  }
  .material-icon-sharp-create:before {
    content: '\\e9f7';
  }
  .material-icon-sharp-create_new_folder:before {
    content: '\\e9f8';
  }
  .material-icon-sharp-credit_card:before {
    content: '\\e9f9';
  }
  .material-icon-sharp-crop:before {
    content: '\\e9fa';
  }
  .material-icon-sharp-crop_3_2:before {
    content: '\\e9fb';
  }
  .material-icon-sharp-crop_5_4:before {
    content: '\\e9fc';
  }
  .material-icon-sharp-crop_7_5:before {
    content: '\\e9fd';
  }
  .material-icon-sharp-crop_16_9:before {
    content: '\\e9fe';
  }
  .material-icon-sharp-crop_din:before {
    content: '\\e9ff';
  }
  .material-icon-sharp-crop_free:before {
    content: '\\ea00';
  }
  .material-icon-sharp-crop_landscape:before {
    content: '\\ea01';
  }
  .material-icon-sharp-crop_original:before {
    content: '\\ea02';
  }
  .material-icon-sharp-crop_portrait:before {
    content: '\\ea03';
  }
  .material-icon-sharp-crop_rotate:before {
    content: '\\ea04';
  }
  .material-icon-sharp-crop_square:before {
    content: '\\ea05';
  }
  .material-icon-sharp-dashboard:before {
    content: '\\ea06';
  }
  .material-icon-sharp-data_usage:before {
    content: '\\ea07';
  }
  .material-icon-sharp-date_range:before {
    content: '\\ea08';
  }
  .material-icon-sharp-dehaze:before {
    content: '\\ea09';
  }
  .material-icon-sharp-delete:before {
    content: '\\ea0a';
  }
  .material-icon-sharp-delete_forever:before {
    content: '\\ea0b';
  }
  .material-icon-sharp-delete_outline:before {
    content: '\\ea0c';
  }
  .material-icon-sharp-delete_sweep:before {
    content: '\\ea0d';
  }
  .material-icon-sharp-departure_board:before {
    content: '\\ea0e';
  }
  .material-icon-sharp-description:before {
    content: '\\ea0f';
  }
  .material-icon-sharp-desktop_access_disabled:before {
    content: '\\ea10';
  }
  .material-icon-sharp-desktop_mac:before {
    content: '\\ea11';
  }
  .material-icon-sharp-desktop_windows:before {
    content: '\\ea12';
  }
  .material-icon-sharp-details:before {
    content: '\\ea13';
  }
  .material-icon-sharp-developer_board:before {
    content: '\\ea14';
  }
  .material-icon-sharp-developer_mode:before {
    content: '\\ea15';
  }
  .material-icon-sharp-device_hub:before {
    content: '\\ea16';
  }
  .material-icon-sharp-devices:before {
    content: '\\ea17';
  }
  .material-icon-sharp-devices_other:before {
    content: '\\ea18';
  }
  .material-icon-sharp-device_unknown:before {
    content: '\\ea19';
  }
  .material-icon-sharp-dialer_sip:before {
    content: '\\ea1a';
  }
  .material-icon-sharp-dialpad:before {
    content: '\\ea1b';
  }
  .material-icon-sharp-directions:before {
    content: '\\ea1c';
  }
  .material-icon-sharp-directions_bike:before {
    content: '\\ea1d';
  }
  .material-icon-sharp-directions_boat:before {
    content: '\\ea1e';
  }
  .material-icon-sharp-directions_bus:before {
    content: '\\ea1f';
  }
  .material-icon-sharp-directions_car:before {
    content: '\\ea20';
  }
  .material-icon-sharp-directions_railway:before {
    content: '\\ea21';
  }
  .material-icon-sharp-directions_run:before {
    content: '\\ea22';
  }
  .material-icon-sharp-directions_subway:before {
    content: '\\ea23';
  }
  .material-icon-sharp-directions_transit:before {
    content: '\\ea24';
  }
  .material-icon-sharp-directions_walk:before {
    content: '\\ea25';
  }
  .material-icon-sharp-disc_full:before {
    content: '\\ea26';
  }
  .material-icon-sharp-dns:before {
    content: '\\ea27';
  }
  .material-icon-sharp-dock:before {
    content: '\\ea28';
  }
  .material-icon-sharp-domain:before {
    content: '\\ea29';
  }
  .material-icon-sharp-domain_disabled:before {
    content: '\\ea2a';
  }
  .material-icon-sharp-done:before {
    content: '\\ea2b';
  }
  .material-icon-sharp-done_all:before {
    content: '\\ea2c';
  }
  .material-icon-sharp-done_outline:before {
    content: '\\ea2d';
  }
  .material-icon-sharp-donut_large:before {
    content: '\\ea2e';
  }
  .material-icon-sharp-donut_small:before {
    content: '\\ea2f';
  }
  .material-icon-sharp-drafts:before {
    content: '\\ea30';
  }
  .material-icon-sharp-drag_handle:before {
    content: '\\ea31';
  }
  .material-icon-sharp-drag_indicator:before {
    content: '\\ea32';
  }
  .material-icon-sharp-drive_eta:before {
    content: '\\ea33';
  }
  .material-icon-sharp-duo:before {
    content: '\\ea34';
  }
  .material-icon-sharp-dvr:before {
    content: '\\ea35';
  }
  .material-icon-sharp-edit:before {
    content: '\\ea36';
  }
  .material-icon-sharp-edit_attributes:before {
    content: '\\ea37';
  }
  .material-icon-sharp-edit_location:before {
    content: '\\ea38';
  }
  .material-icon-sharp-eject:before {
    content: '\\ea39';
  }
  .material-icon-sharp-email:before {
    content: '\\ea3a';
  }
  .material-icon-sharp-enhanced_encryption:before {
    content: '\\ea3b';
  }
  .material-icon-sharp-equalizer:before {
    content: '\\ea3c';
  }
  .material-icon-sharp-error:before {
    content: '\\ea3d';
  }
  .material-icon-sharp-error_outline:before {
    content: '\\ea3e';
  }
  .material-icon-sharp-euro_symbol:before {
    content: '\\ea3f';
  }
  .material-icon-sharp-event:before {
    content: '\\ea40';
  }
  .material-icon-sharp-event_available:before {
    content: '\\ea41';
  }
  .material-icon-sharp-event_busy:before {
    content: '\\ea42';
  }
  .material-icon-sharp-event_note:before {
    content: '\\ea43';
  }
  .material-icon-sharp-event_seat:before {
    content: '\\ea44';
  }
  .material-icon-sharp-ev_station:before {
    content: '\\ea45';
  }
  .material-icon-sharp-exit_to_app:before {
    content: '\\ea46';
  }
  .material-icon-sharp-expand_less:before {
    content: '\\ea47';
  }
  .material-icon-sharp-expand_more:before {
    content: '\\ea48';
  }
  .material-icon-sharp-explicit:before {
    content: '\\ea49';
  }
  .material-icon-sharp-explore:before {
    content: '\\ea4a';
  }
  .material-icon-sharp-explore_off:before {
    content: '\\ea4b';
  }
  .material-icon-sharp-exposure:before {
    content: '\\ea4c';
  }
  .material-icon-sharp-exposure_neg_1:before {
    content: '\\ea4d';
  }
  .material-icon-sharp-exposure_neg_2:before {
    content: '\\ea4e';
  }
  .material-icon-sharp-exposure_plus_1:before {
    content: '\\ea4f';
  }
  .material-icon-sharp-exposure_plus_2:before {
    content: '\\ea50';
  }
  .material-icon-sharp-exposure_zero:before {
    content: '\\ea51';
  }
  .material-icon-sharp-extension:before {
    content: '\\ea52';
  }
  .material-icon-sharp-face:before {
    content: '\\ea53';
  }
  .material-icon-sharp-fastfood:before {
    content: '\\ea54';
  }
  .material-icon-sharp-fast_forward:before {
    content: '\\ea55';
  }
  .material-icon-sharp-fast_rewind:before {
    content: '\\ea56';
  }
  .material-icon-sharp-favorite:before {
    content: '\\ea57';
  }
  .material-icon-sharp-favorite_border:before {
    content: '\\ea58';
  }
  .material-icon-sharp-featured_play_list:before {
    content: '\\ea59';
  }
  .material-icon-sharp-featured_video:before {
    content: '\\ea5a';
  }
  .material-icon-sharp-feedback:before {
    content: '\\ea5b';
  }
  .material-icon-sharp-fiber_dvr:before {
    content: '\\ea5c';
  }
  .material-icon-sharp-fiber_manual_record:before {
    content: '\\ea5d';
  }
  .material-icon-sharp-fiber_new:before {
    content: '\\ea5e';
  }
  .material-icon-sharp-fiber_pin:before {
    content: '\\ea5f';
  }
  .material-icon-sharp-fiber_smart_record:before {
    content: '\\ea60';
  }
  .material-icon-sharp-file_copy:before {
    content: '\\ea61';
  }
  .material-icon-sharp-filter:before {
    content: '\\ea62';
  }
  .material-icon-sharp-filter_1:before {
    content: '\\ea63';
  }
  .material-icon-sharp-filter_2:before {
    content: '\\ea64';
  }
  .material-icon-sharp-filter_3:before {
    content: '\\ea65';
  }
  .material-icon-sharp-filter_4:before {
    content: '\\ea66';
  }
  .material-icon-sharp-filter_5:before {
    content: '\\ea67';
  }
  .material-icon-sharp-filter_6:before {
    content: '\\ea68';
  }
  .material-icon-sharp-filter_7:before {
    content: '\\ea69';
  }
  .material-icon-sharp-filter_8:before {
    content: '\\ea6a';
  }
  .material-icon-sharp-filter_9:before {
    content: '\\ea6b';
  }
  .material-icon-sharp-filter_9_plus:before {
    content: '\\ea6c';
  }
  .material-icon-sharp-filter_b_and_w:before {
    content: '\\ea6d';
  }
  .material-icon-sharp-filter_center_focus:before {
    content: '\\ea6e';
  }
  .material-icon-sharp-filter_drama:before {
    content: '\\ea6f';
  }
  .material-icon-sharp-filter_frames:before {
    content: '\\ea70';
  }
  .material-icon-sharp-filter_hdr:before {
    content: '\\ea71';
  }
  .material-icon-sharp-filter_list:before {
    content: '\\ea72';
  }
  .material-icon-sharp-filter_none:before {
    content: '\\ea73';
  }
  .material-icon-sharp-filter_tilt_shift:before {
    content: '\\ea74';
  }
  .material-icon-sharp-filter_vintage:before {
    content: '\\ea75';
  }
  .material-icon-sharp-find_in_page:before {
    content: '\\ea76';
  }
  .material-icon-sharp-find_replace:before {
    content: '\\ea77';
  }
  .material-icon-sharp-fingerprint:before {
    content: '\\ea78';
  }
  .material-icon-sharp-first_page:before {
    content: '\\ea79';
  }
  .material-icon-sharp-fitness_center:before {
    content: '\\ea7a';
  }
  .material-icon-sharp-flag:before {
    content: '\\ea7b';
  }
  .material-icon-sharp-flare:before {
    content: '\\ea7c';
  }
  .material-icon-sharp-flash_auto:before {
    content: '\\ea7d';
  }
  .material-icon-sharp-flash_off:before {
    content: '\\ea7e';
  }
  .material-icon-sharp-flash_on:before {
    content: '\\ea7f';
  }
  .material-icon-sharp-flight:before {
    content: '\\ea80';
  }
  .material-icon-sharp-flight_land:before {
    content: '\\ea81';
  }
  .material-icon-sharp-flight_takeoff:before {
    content: '\\ea82';
  }
  .material-icon-sharp-flip:before {
    content: '\\ea83';
  }
  .material-icon-sharp-flip_to_back:before {
    content: '\\ea84';
  }
  .material-icon-sharp-flip_to_front:before {
    content: '\\ea85';
  }
  .material-icon-sharp-folder:before {
    content: '\\ea86';
  }
  .material-icon-sharp-folder_open:before {
    content: '\\ea87';
  }
  .material-icon-sharp-folder_shared:before {
    content: '\\ea88';
  }
  .material-icon-sharp-folder_special:before {
    content: '\\ea89';
  }
  .material-icon-sharp-font_download:before {
    content: '\\ea8a';
  }
  .material-icon-sharp-format_align_center:before {
    content: '\\ea8b';
  }
  .material-icon-sharp-format_align_justify:before {
    content: '\\ea8c';
  }
  .material-icon-sharp-format_align_left:before {
    content: '\\ea8d';
  }
  .material-icon-sharp-format_align_right:before {
    content: '\\ea8e';
  }
  .material-icon-sharp-format_bold:before {
    content: '\\ea8f';
  }
  .material-icon-sharp-format_clear:before {
    content: '\\ea90';
  }
  .material-icon-sharp-format_color_fill .path1:before {
    content: '\\ea91';
    color: rgb(0, 0, 0);
  }
  .material-icon-sharp-format_color_fill .path2:before {
    content: '\\ea92';
    margin-left: -1em;
    color: rgb(0, 0, 0);
    opacity: 0.36;
  }
  .material-icon-sharp-format_color_reset:before {
    content: '\\ea93';
  }
  .material-icon-sharp-format_color_text .path1:before {
    content: '\\ea94';
    color: rgb(0, 0, 0);
    opacity: 0.36;
  }
  .material-icon-sharp-format_color_text .path2:before {
    content: '\\ea95';
    margin-left: -1em;
    color: rgb(0, 0, 0);
  }
  .material-icon-sharp-format_indent_decrease:before {
    content: '\\ea96';
  }
  .material-icon-sharp-format_indent_increase:before {
    content: '\\ea97';
  }
  .material-icon-sharp-format_italic:before {
    content: '\\ea98';
  }
  .material-icon-sharp-format_line_spacing:before {
    content: '\\ea99';
  }
  .material-icon-sharp-format_list_bulleted:before {
    content: '\\ea9a';
  }
  .material-icon-sharp-format_list_numbered:before {
    content: '\\ea9b';
  }
  .material-icon-sharp-format_list_numbered_rtl:before {
    content: '\\ea9c';
  }
  .material-icon-sharp-format_paint:before {
    content: '\\ea9d';
  }
  .material-icon-sharp-format_quote:before {
    content: '\\ea9e';
  }
  .material-icon-sharp-format_shapes:before {
    content: '\\ea9f';
  }
  .material-icon-sharp-format_size:before {
    content: '\\eaa0';
  }
  .material-icon-sharp-format_strikethrough:before {
    content: '\\eaa1';
  }
  .material-icon-sharp-format_textdirection_l_to_r:before {
    content: '\\eaa2';
  }
  .material-icon-sharp-format_textdirection_r_to_l:before {
    content: '\\eaa3';
  }
  .material-icon-sharp-format_underlined:before {
    content: '\\eaa4';
  }
  .material-icon-sharp-forum:before {
    content: '\\eaa5';
  }
  .material-icon-sharp-forward:before {
    content: '\\eaa6';
  }
  .material-icon-sharp-forward_5:before {
    content: '\\eaa7';
  }
  .material-icon-sharp-forward_10:before {
    content: '\\eaa8';
  }
  .material-icon-sharp-forward_30:before {
    content: '\\eaa9';
  }
  .material-icon-sharp-free_breakfast:before {
    content: '\\eaaa';
  }
  .material-icon-sharp-fullscreen:before {
    content: '\\eaab';
  }
  .material-icon-sharp-fullscreen_exit:before {
    content: '\\eaac';
  }
  .material-icon-sharp-functions:before {
    content: '\\eaad';
  }
  .material-icon-sharp-gamepad:before {
    content: '\\eaae';
  }
  .material-icon-sharp-games:before {
    content: '\\eaaf';
  }
  .material-icon-sharp-gavel:before {
    content: '\\eab0';
  }
  .material-icon-sharp-gesture:before {
    content: '\\eab1';
  }
  .material-icon-sharp-get_app:before {
    content: '\\eab2';
  }
  .material-icon-sharp-gif:before {
    content: '\\eab3';
  }
  .material-icon-sharp-golf_course:before {
    content: '\\eab4';
  }
  .material-icon-sharp-gps_fixed:before {
    content: '\\eab5';
  }
  .material-icon-sharp-gps_not_fixed:before {
    content: '\\eab6';
  }
  .material-icon-sharp-gps_off:before {
    content: '\\eab7';
  }
  .material-icon-sharp-grade:before {
    content: '\\eab8';
  }
  .material-icon-sharp-gradient:before {
    content: '\\eab9';
  }
  .material-icon-sharp-grain:before {
    content: '\\eaba';
  }
  .material-icon-sharp-graphic_eq:before {
    content: '\\eabb';
  }
  .material-icon-sharp-grid_off:before {
    content: '\\eabc';
  }
  .material-icon-sharp-grid_on:before {
    content: '\\eabd';
  }
  .material-icon-sharp-group:before {
    content: '\\eabe';
  }
  .material-icon-sharp-group_add:before {
    content: '\\eabf';
  }
  .material-icon-sharp-group_work:before {
    content: '\\eac0';
  }
  .material-icon-sharp-g_translate:before {
    content: '\\eac1';
  }
  .material-icon-sharp-hd:before {
    content: '\\eac2';
  }
  .material-icon-sharp-hdr_off:before {
    content: '\\eac3';
  }
  .material-icon-sharp-hdr_on:before {
    content: '\\eac4';
  }
  .material-icon-sharp-hdr_strong:before {
    content: '\\eac5';
  }
  .material-icon-sharp-hdr_weak:before {
    content: '\\eac6';
  }
  .material-icon-sharp-headset:before {
    content: '\\eac7';
  }
  .material-icon-sharp-headset_mic:before {
    content: '\\eac8';
  }
  .material-icon-sharp-healing:before {
    content: '\\eac9';
  }
  .material-icon-sharp-hearing:before {
    content: '\\eaca';
  }
  .material-icon-sharp-help:before {
    content: '\\eacb';
  }
  .material-icon-sharp-help_outline:before {
    content: '\\eacc';
  }
  .material-icon-sharp-highlight:before {
    content: '\\eacd';
  }
  .material-icon-sharp-highlight_off:before {
    content: '\\eace';
  }
  .material-icon-sharp-high_quality:before {
    content: '\\eacf';
  }
  .material-icon-sharp-history:before {
    content: '\\ead0';
  }
  .material-icon-sharp-home:before {
    content: '\\ead1';
  }
  .material-icon-sharp-horizontal_split:before {
    content: '\\ead2';
  }
  .material-icon-sharp-hotel:before {
    content: '\\ead3';
  }
  .material-icon-sharp-hot_tub:before {
    content: '\\ead4';
  }
  .material-icon-sharp-hourglass_empty:before {
    content: '\\ead5';
  }
  .material-icon-sharp-hourglass_full:before {
    content: '\\ead6';
  }
  .material-icon-sharp-how_to_reg:before {
    content: '\\ead7';
  }
  .material-icon-sharp-how_to_vote:before {
    content: '\\ead8';
  }
  .material-icon-sharp-http:before {
    content: '\\ead9';
  }
  .material-icon-sharp-https:before {
    content: '\\eada';
  }
  .material-icon-sharp-image:before {
    content: '\\eadb';
  }
  .material-icon-sharp-image_aspect_ratio:before {
    content: '\\eadc';
  }
  .material-icon-sharp-image_search:before {
    content: '\\eadd';
  }
  .material-icon-sharp-important_devices:before {
    content: '\\eade';
  }
  .material-icon-sharp-import_contacts:before {
    content: '\\eadf';
  }
  .material-icon-sharp-import_export:before {
    content: '\\eae0';
  }
  .material-icon-sharp-inbox:before {
    content: '\\eae1';
  }
  .material-icon-sharp-indeterminate_check_box:before {
    content: '\\eae2';
  }
  .material-icon-sharp-info:before {
    content: '\\eae3';
  }
  .material-icon-sharp-input:before {
    content: '\\eae4';
  }
  .material-icon-sharp-insert_chart:before {
    content: '\\eae5';
  }
  .material-icon-sharp-insert_chart_outlined:before {
    content: '\\eae6';
  }
  .material-icon-sharp-insert_comment:before {
    content: '\\eae7';
  }
  .material-icon-sharp-insert_drive_file:before {
    content: '\\eae8';
  }
  .material-icon-sharp-insert_emoticon:before {
    content: '\\eae9';
  }
  .material-icon-sharp-insert_invitation:before {
    content: '\\eaea';
  }
  .material-icon-sharp-insert_link:before {
    content: '\\eaeb';
  }
  .material-icon-sharp-insert_photo:before {
    content: '\\eaec';
  }
  .material-icon-sharp-invert_colors:before {
    content: '\\eaed';
  }
  .material-icon-sharp-invert_colors_off:before {
    content: '\\eaee';
  }
  .material-icon-sharp-iso:before {
    content: '\\eaef';
  }
  .material-icon-sharp-keyboard:before {
    content: '\\eaf0';
  }
  .material-icon-sharp-keyboard_arrow_down:before {
    content: '\\eaf1';
  }
  .material-icon-sharp-keyboard_arrow_left:before {
    content: '\\eaf2';
  }
  .material-icon-sharp-keyboard_arrow_right:before {
    content: '\\eaf3';
  }
  .material-icon-sharp-keyboard_arrow_up:before {
    content: '\\eaf4';
  }
  .material-icon-sharp-keyboard_backspace:before {
    content: '\\eaf5';
  }
  .material-icon-sharp-keyboard_capslock:before {
    content: '\\eaf6';
  }
  .material-icon-sharp-keyboard_hide:before {
    content: '\\eaf7';
  }
  .material-icon-sharp-keyboard_return:before {
    content: '\\eaf8';
  }
  .material-icon-sharp-keyboard_tab:before {
    content: '\\eaf9';
  }
  .material-icon-sharp-keyboard_voice:before {
    content: '\\eafa';
  }
  .material-icon-sharp-kitchen:before {
    content: '\\eafb';
  }
  .material-icon-sharp-label:before {
    content: '\\eafc';
  }
  .material-icon-sharp-label_important:before {
    content: '\\eafd';
  }
  .material-icon-sharp-label_off:before {
    content: '\\eafe';
  }
  .material-icon-sharp-landscape:before {
    content: '\\eaff';
  }
  .material-icon-sharp-language:before {
    content: '\\eb00';
  }
  .material-icon-sharp-laptop:before {
    content: '\\eb01';
  }
  .material-icon-sharp-laptop_chromebook:before {
    content: '\\eb02';
  }
  .material-icon-sharp-laptop_mac:before {
    content: '\\eb03';
  }
  .material-icon-sharp-laptop_windows:before {
    content: '\\eb04';
  }
  .material-icon-sharp-last_page:before {
    content: '\\eb05';
  }
  .material-icon-sharp-launch:before {
    content: '\\eb06';
  }
  .material-icon-sharp-layers:before {
    content: '\\eb07';
  }
  .material-icon-sharp-layers_clear:before {
    content: '\\eb08';
  }
  .material-icon-sharp-leak_add:before {
    content: '\\eb09';
  }
  .material-icon-sharp-leak_remove:before {
    content: '\\eb0a';
  }
  .material-icon-sharp-lens:before {
    content: '\\eb0b';
  }
  .material-icon-sharp-library_add:before {
    content: '\\eb0c';
  }
  .material-icon-sharp-library_books:before {
    content: '\\eb0d';
  }
  .material-icon-sharp-library_music:before {
    content: '\\eb0e';
  }
  .material-icon-sharp-linear_scale:before {
    content: '\\eb0f';
  }
  .material-icon-sharp-line_style:before {
    content: '\\eb10';
  }
  .material-icon-sharp-line_weight:before {
    content: '\\eb11';
  }
  .material-icon-sharp-link:before {
    content: '\\eb12';
  }
  .material-icon-sharp-linked_camera:before {
    content: '\\eb13';
  }
  .material-icon-sharp-link_off:before {
    content: '\\eb14';
  }
  .material-icon-sharp-list:before {
    content: '\\eb15';
  }
  .material-icon-sharp-list_alt:before {
    content: '\\eb16';
  }
  .material-icon-sharp-live_help:before {
    content: '\\eb17';
  }
  .material-icon-sharp-live_tv:before {
    content: '\\eb18';
  }
  .material-icon-sharp-local_activity:before {
    content: '\\eb19';
  }
  .material-icon-sharp-local_airport:before {
    content: '\\eb1a';
  }
  .material-icon-sharp-local_atm:before {
    content: '\\eb1b';
  }
  .material-icon-sharp-local_bar:before {
    content: '\\eb1c';
  }
  .material-icon-sharp-local_cafe:before {
    content: '\\eb1d';
  }
  .material-icon-sharp-local_car_wash:before {
    content: '\\eb1e';
  }
  .material-icon-sharp-local_convenience_store:before {
    content: '\\eb1f';
  }
  .material-icon-sharp-local_dining:before {
    content: '\\eb20';
  }
  .material-icon-sharp-local_drink:before {
    content: '\\eb21';
  }
  .material-icon-sharp-local_florist:before {
    content: '\\eb22';
  }
  .material-icon-sharp-local_gas_station:before {
    content: '\\eb23';
  }
  .material-icon-sharp-local_grocery_store:before {
    content: '\\eb24';
  }
  .material-icon-sharp-local_hospital:before {
    content: '\\eb25';
  }
  .material-icon-sharp-local_hotel:before {
    content: '\\eb26';
  }
  .material-icon-sharp-local_laundry_service:before {
    content: '\\eb27';
  }
  .material-icon-sharp-local_library:before {
    content: '\\eb28';
  }
  .material-icon-sharp-local_mall:before {
    content: '\\eb29';
  }
  .material-icon-sharp-local_movies:before {
    content: '\\eb2a';
  }
  .material-icon-sharp-local_offer:before {
    content: '\\eb2b';
  }
  .material-icon-sharp-local_parking:before {
    content: '\\eb2c';
  }
  .material-icon-sharp-local_pharmacy:before {
    content: '\\eb2d';
  }
  .material-icon-sharp-local_phone:before {
    content: '\\eb2e';
  }
  .material-icon-sharp-local_pizza:before {
    content: '\\eb2f';
  }
  .material-icon-sharp-local_play:before {
    content: '\\eb30';
  }
  .material-icon-sharp-local_post_office:before {
    content: '\\eb31';
  }
  .material-icon-sharp-local_printshop:before {
    content: '\\eb32';
  }
  .material-icon-sharp-local_see:before {
    content: '\\eb33';
  }
  .material-icon-sharp-local_shipping:before {
    content: '\\eb34';
  }
  .material-icon-sharp-local_taxi:before {
    content: '\\eb35';
  }
  .material-icon-sharp-location_city:before {
    content: '\\eb36';
  }
  .material-icon-sharp-location_disabled:before {
    content: '\\eb37';
  }
  .material-icon-sharp-location_off:before {
    content: '\\eb38';
  }
  .material-icon-sharp-location_on:before {
    content: '\\eb39';
  }
  .material-icon-sharp-location_searching:before {
    content: '\\eb3a';
  }
  .material-icon-sharp-lock:before {
    content: '\\eb3b';
  }
  .material-icon-sharp-lock_open:before {
    content: '\\eb3c';
  }
  .material-icon-sharp-looks:before {
    content: '\\eb3d';
  }
  .material-icon-sharp-looks_3:before {
    content: '\\eb3e';
  }
  .material-icon-sharp-looks_4:before {
    content: '\\eb3f';
  }
  .material-icon-sharp-looks_5:before {
    content: '\\eb40';
  }
  .material-icon-sharp-looks_6:before {
    content: '\\eb41';
  }
  .material-icon-sharp-looks_one:before {
    content: '\\eb42';
  }
  .material-icon-sharp-looks_two:before {
    content: '\\eb43';
  }
  .material-icon-sharp-loop:before {
    content: '\\eb44';
  }
  .material-icon-sharp-loupe:before {
    content: '\\eb45';
  }
  .material-icon-sharp-low_priority:before {
    content: '\\eb46';
  }
  .material-icon-sharp-loyalty:before {
    content: '\\eb47';
  }
  .material-icon-sharp-mail:before {
    content: '\\eb48';
  }
  .material-icon-sharp-mail_outline:before {
    content: '\\eb49';
  }
  .material-icon-sharp-map:before {
    content: '\\eb4a';
  }
  .material-icon-sharp-markunread:before {
    content: '\\eb4b';
  }
  .material-icon-sharp-markunread_mailbox:before {
    content: '\\eb4c';
  }
  .material-icon-sharp-maximize:before {
    content: '\\eb4d';
  }
  .material-icon-sharp-meeting_room:before {
    content: '\\eb4e';
  }
  .material-icon-sharp-memory:before {
    content: '\\eb4f';
  }
  .material-icon-sharp-menu:before {
    content: '\\eb50';
  }
  .material-icon-sharp-merge_type:before {
    content: '\\eb51';
  }
  .material-icon-sharp-message:before {
    content: '\\eb52';
  }
  .material-icon-sharp-mic:before {
    content: '\\eb53';
  }
  .material-icon-sharp-mic_none:before {
    content: '\\eb54';
  }
  .material-icon-sharp-mic_off:before {
    content: '\\eb55';
  }
  .material-icon-sharp-minimize:before {
    content: '\\eb56';
  }
  .material-icon-sharp-missed_video_call:before {
    content: '\\eb57';
  }
  .material-icon-sharp-mms:before {
    content: '\\eb58';
  }
  .material-icon-sharp-mobile_friendly:before {
    content: '\\eb59';
  }
  .material-icon-sharp-mobile_off:before {
    content: '\\eb5a';
  }
  .material-icon-sharp-mobile_screen_share:before {
    content: '\\eb5b';
  }
  .material-icon-sharp-mode_comment:before {
    content: '\\eb5c';
  }
  .material-icon-sharp-monetization_on:before {
    content: '\\eb5d';
  }
  .material-icon-sharp-money:before {
    content: '\\eb5e';
  }
  .material-icon-sharp-money_off:before {
    content: '\\eb5f';
  }
  .material-icon-sharp-monochrome_photos:before {
    content: '\\eb60';
  }
  .material-icon-sharp-mood:before {
    content: '\\eb61';
  }
  .material-icon-sharp-mood_bad:before {
    content: '\\eb62';
  }
  .material-icon-sharp-more:before {
    content: '\\eb63';
  }
  .material-icon-sharp-more_horiz:before {
    content: '\\eb64';
  }
  .material-icon-sharp-more_vert:before {
    content: '\\eb65';
  }
  .material-icon-sharp-motorcycle:before {
    content: '\\eb66';
  }
  .material-icon-sharp-mouse:before {
    content: '\\eb67';
  }
  .material-icon-sharp-move_to_inbox:before {
    content: '\\eb68';
  }
  .material-icon-sharp-movie:before {
    content: '\\eb69';
  }
  .material-icon-sharp-movie_creation:before {
    content: '\\eb6a';
  }
  .material-icon-sharp-movie_filter:before {
    content: '\\eb6b';
  }
  .material-icon-sharp-multiline_chart:before {
    content: '\\eb6c';
  }
  .material-icon-sharp-music_note:before {
    content: '\\eb6d';
  }
  .material-icon-sharp-music_off:before {
    content: '\\eb6e';
  }
  .material-icon-sharp-music_video:before {
    content: '\\eb6f';
  }
  .material-icon-sharp-my_location:before {
    content: '\\eb70';
  }
  .material-icon-sharp-nature:before {
    content: '\\eb71';
  }
  .material-icon-sharp-nature_people:before {
    content: '\\eb72';
  }
  .material-icon-sharp-navigate_before:before {
    content: '\\eb73';
  }
  .material-icon-sharp-navigate_next:before {
    content: '\\eb74';
  }
  .material-icon-sharp-navigation:before {
    content: '\\eb75';
  }
  .material-icon-sharp-near_me:before {
    content: '\\eb76';
  }
  .material-icon-sharp-network_cell .path1:before {
    content: '\\eb77';
    color: rgb(0, 0, 0);
    opacity: 0.3;
  }
  .material-icon-sharp-network_cell .path2:before {
    content: '\\eb78';
    margin-left: -1em;
    color: rgb(0, 0, 0);
  }
  .material-icon-sharp-network_check:before {
    content: '\\eb79';
  }
  .material-icon-sharp-network_locked:before {
    content: '\\eb7a';
  }
  .material-icon-sharp-network_wifi .path1:before {
    content: '\\eb7b';
    color: rgb(0, 0, 0);
    opacity: 0.3;
  }
  .material-icon-sharp-network_wifi .path2:before {
    content: '\\eb7c';
    margin-left: -1em;
    color: rgb(0, 0, 0);
  }
  .material-icon-sharp-new_releases:before {
    content: '\\eb7d';
  }
  .material-icon-sharp-next_week:before {
    content: '\\eb7e';
  }
  .material-icon-sharp-nfc:before {
    content: '\\eb7f';
  }
  .material-icon-sharp-no_encryption:before {
    content: '\\eb80';
  }
  .material-icon-sharp-no_meeting_room:before {
    content: '\\eb81';
  }
  .material-icon-sharp-no_sim:before {
    content: '\\eb82';
  }
  .material-icon-sharp-note:before {
    content: '\\eb83';
  }
  .material-icon-sharp-note_add:before {
    content: '\\eb84';
  }
  .material-icon-sharp-notes:before {
    content: '\\eb85';
  }
  .material-icon-sharp-notification_important:before {
    content: '\\eb86';
  }
  .material-icon-sharp-notifications:before {
    content: '\\eb87';
  }
  .material-icon-sharp-notifications_active:before {
    content: '\\eb88';
  }
  .material-icon-sharp-notifications_none:before {
    content: '\\eb89';
  }
  .material-icon-sharp-notifications_off:before {
    content: '\\eb8a';
  }
  .material-icon-sharp-notifications_paused:before {
    content: '\\eb8b';
  }
  .material-icon-sharp-not_interested:before {
    content: '\\eb8c';
  }
  .material-icon-sharp-not_listed_location:before {
    content: '\\eb8d';
  }
  .material-icon-sharp-offline_bolt:before {
    content: '\\eb8e';
  }
  .material-icon-sharp-offline_pin:before {
    content: '\\eb8f';
  }
  .material-icon-sharp-ondemand_video:before {
    content: '\\eb90';
  }
  .material-icon-sharp-opacity:before {
    content: '\\eb91';
  }
  .material-icon-sharp-open_in_browser:before {
    content: '\\eb92';
  }
  .material-icon-sharp-open_in_new:before {
    content: '\\eb93';
  }
  .material-icon-sharp-open_with:before {
    content: '\\eb94';
  }
  .material-icon-sharp-outlined_flag:before {
    content: '\\eb95';
  }
  .material-icon-sharp-pages:before {
    content: '\\eb96';
  }
  .material-icon-sharp-pageview:before {
    content: '\\eb97';
  }
  .material-icon-sharp-palette:before {
    content: '\\eb98';
  }
  .material-icon-sharp-panorama:before {
    content: '\\eb99';
  }
  .material-icon-sharp-panorama_fish_eye:before {
    content: '\\eb9a';
  }
  .material-icon-sharp-panorama_horizontal:before {
    content: '\\eb9b';
  }
  .material-icon-sharp-panorama_vertical:before {
    content: '\\eb9c';
  }
  .material-icon-sharp-panorama_wide_angle:before {
    content: '\\eb9d';
  }
  .material-icon-sharp-pan_tool:before {
    content: '\\eb9e';
  }
  .material-icon-sharp-party_mode:before {
    content: '\\eb9f';
  }
  .material-icon-sharp-pause:before {
    content: '\\eba0';
  }
  .material-icon-sharp-pause_circle_filled:before {
    content: '\\eba1';
  }
  .material-icon-sharp-pause_circle_outline:before {
    content: '\\eba2';
  }
  .material-icon-sharp-pause_presentation:before {
    content: '\\eba3';
  }
  .material-icon-sharp-payment:before {
    content: '\\eba4';
  }
  .material-icon-sharp-people:before {
    content: '\\eba5';
  }
  .material-icon-sharp-people_outline:before {
    content: '\\eba6';
  }
  .material-icon-sharp-perm_camera_mic:before {
    content: '\\eba7';
  }
  .material-icon-sharp-perm_contact_calendar:before {
    content: '\\eba8';
  }
  .material-icon-sharp-perm_data_setting:before {
    content: '\\eba9';
  }
  .material-icon-sharp-perm_device_information:before {
    content: '\\ebaa';
  }
  .material-icon-sharp-perm_identity:before {
    content: '\\ebab';
  }
  .material-icon-sharp-perm_media:before {
    content: '\\ebac';
  }
  .material-icon-sharp-perm_phone_msg:before {
    content: '\\ebad';
  }
  .material-icon-sharp-perm_scan_wifi:before {
    content: '\\ebae';
  }
  .material-icon-sharp-person:before {
    content: '\\ebaf';
  }
  .material-icon-sharp-person_add:before {
    content: '\\ebb0';
  }
  .material-icon-sharp-person_add_disabled:before {
    content: '\\ebb1';
  }
  .material-icon-sharp-personal_video:before {
    content: '\\ebb2';
  }
  .material-icon-sharp-person_outline:before {
    content: '\\ebb3';
  }
  .material-icon-sharp-person_pin:before {
    content: '\\ebb4';
  }
  .material-icon-sharp-person_pin_circle:before {
    content: '\\ebb5';
  }
  .material-icon-sharp-pets:before {
    content: '\\ebb6';
  }
  .material-icon-sharp-phone:before {
    content: '\\ebb7';
  }
  .material-icon-sharp-phone_android:before {
    content: '\\ebb8';
  }
  .material-icon-sharp-phone_bluetooth_speaker:before {
    content: '\\ebb9';
  }
  .material-icon-sharp-phone_callback:before {
    content: '\\ebba';
  }
  .material-icon-sharp-phone_forwarded:before {
    content: '\\ebbb';
  }
  .material-icon-sharp-phone_in_talk:before {
    content: '\\ebbc';
  }
  .material-icon-sharp-phone_iphone:before {
    content: '\\ebbd';
  }
  .material-icon-sharp-phonelink:before {
    content: '\\ebbe';
  }
  .material-icon-sharp-phonelink_erase:before {
    content: '\\ebbf';
  }
  .material-icon-sharp-phonelink_lock:before {
    content: '\\ebc0';
  }
  .material-icon-sharp-phonelink_off:before {
    content: '\\ebc1';
  }
  .material-icon-sharp-phonelink_ring:before {
    content: '\\ebc2';
  }
  .material-icon-sharp-phonelink_setup:before {
    content: '\\ebc3';
  }
  .material-icon-sharp-phone_locked:before {
    content: '\\ebc4';
  }
  .material-icon-sharp-phone_missed:before {
    content: '\\ebc5';
  }
  .material-icon-sharp-phone_paused:before {
    content: '\\ebc6';
  }
  .material-icon-sharp-photo:before {
    content: '\\ebc7';
  }
  .material-icon-sharp-photo_album:before {
    content: '\\ebc8';
  }
  .material-icon-sharp-photo_camera:before {
    content: '\\ebc9';
  }
  .material-icon-sharp-photo_filter:before {
    content: '\\ebca';
  }
  .material-icon-sharp-photo_library:before {
    content: '\\ebcb';
  }
  .material-icon-sharp-photo_size_select_actual:before {
    content: '\\ebcc';
  }
  .material-icon-sharp-photo_size_select_large:before {
    content: '\\ebcd';
  }
  .material-icon-sharp-photo_size_select_small:before {
    content: '\\ebce';
  }
  .material-icon-sharp-picture_as_pdf:before {
    content: '\\ebcf';
  }
  .material-icon-sharp-picture_in_picture:before {
    content: '\\ebd0';
  }
  .material-icon-sharp-picture_in_picture_alt:before {
    content: '\\ebd1';
  }
  .material-icon-sharp-pie_chart:before {
    content: '\\ebd2';
  }
  .material-icon-sharp-pin_drop:before {
    content: '\\ebd3';
  }
  .material-icon-sharp-place:before {
    content: '\\ebd4';
  }
  .material-icon-sharp-play_arrow:before {
    content: '\\ebd5';
  }
  .material-icon-sharp-play_circle_filled:before {
    content: '\\ebd6';
  }
  .material-icon-sharp-play_circle_filled_white:before {
    content: '\\ebd7';
  }
  .material-icon-sharp-play_circle_outline:before {
    content: '\\ebd8';
  }
  .material-icon-sharp-play_for_work:before {
    content: '\\ebd9';
  }
  .material-icon-sharp-playlist_add:before {
    content: '\\ebda';
  }
  .material-icon-sharp-playlist_add_check:before {
    content: '\\ebdb';
  }
  .material-icon-sharp-playlist_play:before {
    content: '\\ebdc';
  }
  .material-icon-sharp-plus_one:before {
    content: '\\ebdd';
  }
  .material-icon-sharp-poll:before {
    content: '\\ebde';
  }
  .material-icon-sharp-polymer:before {
    content: '\\ebdf';
  }
  .material-icon-sharp-pool:before {
    content: '\\ebe0';
  }
  .material-icon-sharp-portable_wifi_off:before {
    content: '\\ebe1';
  }
  .material-icon-sharp-portrait:before {
    content: '\\ebe2';
  }
  .material-icon-sharp-power:before {
    content: '\\ebe3';
  }
  .material-icon-sharp-power_input:before {
    content: '\\ebe4';
  }
  .material-icon-sharp-power_off:before {
    content: '\\ebe5';
  }
  .material-icon-sharp-power_settings_new:before {
    content: '\\ebe6';
  }
  .material-icon-sharp-pregnant_woman:before {
    content: '\\ebe7';
  }
  .material-icon-sharp-present_to_all:before {
    content: '\\ebe8';
  }
  .material-icon-sharp-print:before {
    content: '\\ebe9';
  }
  .material-icon-sharp-print_disabled:before {
    content: '\\ebea';
  }
  .material-icon-sharp-priority_high:before {
    content: '\\ebeb';
  }
  .material-icon-sharp-public:before {
    content: '\\ebec';
  }
  .material-icon-sharp-publish:before {
    content: '\\ebed';
  }
  .material-icon-sharp-query_builder:before {
    content: '\\ebee';
  }
  .material-icon-sharp-question_answer:before {
    content: '\\ebef';
  }
  .material-icon-sharp-queue:before {
    content: '\\ebf0';
  }
  .material-icon-sharp-queue_music:before {
    content: '\\ebf1';
  }
  .material-icon-sharp-queue_play_next:before {
    content: '\\ebf2';
  }
  .material-icon-sharp-radio:before {
    content: '\\ebf3';
  }
  .material-icon-sharp-radio_button_checked:before {
    content: '\\ebf4';
  }
  .material-icon-sharp-radio_button_unchecked:before {
    content: '\\ebf5';
  }
  .material-icon-sharp-rate_review:before {
    content: '\\ebf6';
  }
  .material-icon-sharp-receipt:before {
    content: '\\ebf7';
  }
  .material-icon-sharp-recent_actors:before {
    content: '\\ebf8';
  }
  .material-icon-sharp-record_voice_over:before {
    content: '\\ebf9';
  }
  .material-icon-sharp-redeem:before {
    content: '\\ebfa';
  }
  .material-icon-sharp-redo:before {
    content: '\\ebfb';
  }
  .material-icon-sharp-refresh:before {
    content: '\\ebfc';
  }
  .material-icon-sharp-remove:before {
    content: '\\ebfd';
  }
  .material-icon-sharp-remove_circle:before {
    content: '\\ebfe';
  }
  .material-icon-sharp-remove_circle_outline:before {
    content: '\\ebff';
  }
  .material-icon-sharp-remove_from_queue:before {
    content: '\\ec00';
  }
  .material-icon-sharp-remove_red_eye:before {
    content: '\\ec01';
  }
  .material-icon-sharp-remove_shopping_cart:before {
    content: '\\ec02';
  }
  .material-icon-sharp-reorder:before {
    content: '\\ec03';
  }
  .material-icon-sharp-repeat:before {
    content: '\\ec04';
  }
  .material-icon-sharp-repeat_one:before {
    content: '\\ec05';
  }
  .material-icon-sharp-replay:before {
    content: '\\ec06';
  }
  .material-icon-sharp-replay_5:before {
    content: '\\ec07';
  }
  .material-icon-sharp-replay_10:before {
    content: '\\ec08';
  }
  .material-icon-sharp-replay_30:before {
    content: '\\ec09';
  }
  .material-icon-sharp-reply:before {
    content: '\\ec0a';
  }
  .material-icon-sharp-reply_all:before {
    content: '\\ec0b';
  }
  .material-icon-sharp-report:before {
    content: '\\ec0c';
  }
  .material-icon-sharp-report_off:before {
    content: '\\ec0d';
  }
  .material-icon-sharp-report_problem:before {
    content: '\\ec0e';
  }
  .material-icon-sharp-restaurant:before {
    content: '\\ec0f';
  }
  .material-icon-sharp-restaurant_menu:before {
    content: '\\ec10';
  }
  .material-icon-sharp-restore:before {
    content: '\\ec11';
  }
  .material-icon-sharp-restore_from_trash:before {
    content: '\\ec12';
  }
  .material-icon-sharp-restore_page:before {
    content: '\\ec13';
  }
  .material-icon-sharp-ring_volume:before {
    content: '\\ec14';
  }
  .material-icon-sharp-room:before {
    content: '\\ec15';
  }
  .material-icon-sharp-room_service:before {
    content: '\\ec16';
  }
  .material-icon-sharp-rotate_90_degrees_ccw:before {
    content: '\\ec17';
  }
  .material-icon-sharp-rotate_left:before {
    content: '\\ec18';
  }
  .material-icon-sharp-rotate_right:before {
    content: '\\ec19';
  }
  .material-icon-sharp-rounded_corner:before {
    content: '\\ec1a';
  }
  .material-icon-sharp-router:before {
    content: '\\ec1b';
  }
  .material-icon-sharp-rowing:before {
    content: '\\ec1c';
  }
  .material-icon-sharp-rss_feed:before {
    content: '\\ec1d';
  }
  .material-icon-sharp-rv_hookup:before {
    content: '\\ec1e';
  }
  .material-icon-sharp-satellite:before {
    content: '\\ec1f';
  }
  .material-icon-sharp-save:before {
    content: '\\ec20';
  }
  .material-icon-sharp-save_alt:before {
    content: '\\ec21';
  }
  .material-icon-sharp-scanner:before {
    content: '\\ec22';
  }
  .material-icon-sharp-scatter_plot:before {
    content: '\\ec23';
  }
  .material-icon-sharp-schedule:before {
    content: '\\ec24';
  }
  .material-icon-sharp-school:before {
    content: '\\ec25';
  }
  .material-icon-sharp-score:before {
    content: '\\ec26';
  }
  .material-icon-sharp-screen_lock_landscape:before {
    content: '\\ec27';
  }
  .material-icon-sharp-screen_lock_portrait:before {
    content: '\\ec28';
  }
  .material-icon-sharp-screen_lock_rotation:before {
    content: '\\ec29';
  }
  .material-icon-sharp-screen_rotation:before {
    content: '\\ec2a';
  }
  .material-icon-sharp-screen_share:before {
    content: '\\ec2b';
  }
  .material-icon-sharp-sd_card:before {
    content: '\\ec2c';
  }
  .material-icon-sharp-sd_storage:before {
    content: '\\ec2d';
  }
  .material-icon-sharp-search:before {
    content: '\\ec2e';
  }
  .material-icon-sharp-security:before {
    content: '\\ec2f';
  }
  .material-icon-sharp-select_all:before {
    content: '\\ec30';
  }
  .material-icon-sharp-send:before {
    content: '\\ec31';
  }
  .material-icon-sharp-sentiment_dissatisfied:before {
    content: '\\ec32';
  }
  .material-icon-sharp-sentiment_satisfied:before {
    content: '\\ec33';
  }
  .material-icon-sharp-sentiment_satisfied_alt:before {
    content: '\\ec34';
  }
  .material-icon-sharp-sentiment_very_dissatisfied:before {
    content: '\\ec35';
  }
  .material-icon-sharp-sentiment_very_satisfied:before {
    content: '\\ec36';
  }
  .material-icon-sharp-settings:before {
    content: '\\ec37';
  }
  .material-icon-sharp-settings_applications:before {
    content: '\\ec38';
  }
  .material-icon-sharp-settings_backup_restore:before {
    content: '\\ec39';
  }
  .material-icon-sharp-settings_bluetooth:before {
    content: '\\ec3a';
  }
  .material-icon-sharp-settings_brightness:before {
    content: '\\ec3b';
  }
  .material-icon-sharp-settings_cell:before {
    content: '\\ec3c';
  }
  .material-icon-sharp-settings_ethernet:before {
    content: '\\ec3d';
  }
  .material-icon-sharp-settings_input_antenna:before {
    content: '\\ec3e';
  }
  .material-icon-sharp-settings_input_component:before {
    content: '\\ec3f';
  }
  .material-icon-sharp-settings_input_composite:before {
    content: '\\ec40';
  }
  .material-icon-sharp-settings_input_hdmi:before {
    content: '\\ec41';
  }
  .material-icon-sharp-settings_input_svideo:before {
    content: '\\ec42';
  }
  .material-icon-sharp-settings_overscan:before {
    content: '\\ec43';
  }
  .material-icon-sharp-settings_phone:before {
    content: '\\ec44';
  }
  .material-icon-sharp-settings_power:before {
    content: '\\ec45';
  }
  .material-icon-sharp-settings_remote:before {
    content: '\\ec46';
  }
  .material-icon-sharp-settings_system_daydream:before {
    content: '\\ec47';
  }
  .material-icon-sharp-settings_voice:before {
    content: '\\ec48';
  }
  .material-icon-sharp-share:before {
    content: '\\ec49';
  }
  .material-icon-sharp-shop:before {
    content: '\\ec4a';
  }
  .material-icon-sharp-shopping_basket:before {
    content: '\\ec4b';
  }
  .material-icon-sharp-shopping_cart:before {
    content: '\\ec4c';
  }
  .material-icon-sharp-shop_two:before {
    content: '\\ec4d';
  }
  .material-icon-sharp-short_text:before {
    content: '\\ec4e';
  }
  .material-icon-sharp-show_chart:before {
    content: '\\ec4f';
  }
  .material-icon-sharp-shuffle:before {
    content: '\\ec50';
  }
  .material-icon-sharp-shutter_speed:before {
    content: '\\ec51';
  }
  .material-icon-sharp-signal_cellular_0_bar:before {
    content: '\\ec52';
  }
  .material-icon-sharp-signal_cellular_1_bar .path1:before {
    content: '\\ec53';
    color: rgb(0, 0, 0);
    opacity: 0.3;
  }
  .material-icon-sharp-signal_cellular_1_bar .path2:before {
    content: '\\ec54';
    margin-left: -1em;
    color: rgb(0, 0, 0);
  }
  .material-icon-sharp-signal_cellular_2_bar .path1:before {
    content: '\\ec55';
    color: rgb(0, 0, 0);
    opacity: 0.3;
  }
  .material-icon-sharp-signal_cellular_2_bar .path2:before {
    content: '\\ec56';
    margin-left: -1em;
    color: rgb(0, 0, 0);
  }
  .material-icon-sharp-signal_cellular_3_bar .path1:before {
    content: '\\ec57';
    color: rgb(0, 0, 0);
    opacity: 0.3;
  }
  .material-icon-sharp-signal_cellular_3_bar .path2:before {
    content: '\\ec58';
    margin-left: -1em;
    color: rgb(0, 0, 0);
  }
  .material-icon-sharp-signal_cellular_4_bar:before {
    content: '\\ec59';
  }
  .material-icon-sharp-signal_cellular_alt:before {
    content: '\\ec5a';
  }
  .material-icon-sharp-signal_cellular_connected_no_internet_0_bar
    .path1:before {
    content: '\\ec5b';
    color: rgb(0, 0, 0);
    opacity: 0.3;
  }
  .material-icon-sharp-signal_cellular_connected_no_internet_0_bar
    .path2:before {
    content: '\\ec5c';
    margin-left: -1em;
    color: rgb(0, 0, 0);
  }
  .material-icon-sharp-signal_cellular_connected_no_internet_1_bar
    .path1:before {
    content: '\\ec5d';
    color: rgb(0, 0, 0);
    opacity: 0.3;
  }
  .material-icon-sharp-signal_cellular_connected_no_internet_1_bar
    .path2:before {
    content: '\\ec5e';
    margin-left: -1em;
    color: rgb(0, 0, 0);
  }
  .material-icon-sharp-signal_cellular_connected_no_internet_2_bar
    .path1:before {
    content: '\\ec5f';
    color: rgb(0, 0, 0);
    opacity: 0.3;
  }
  .material-icon-sharp-signal_cellular_connected_no_internet_2_bar
    .path2:before {
    content: '\\ec60';
    margin-left: -1em;
    color: rgb(0, 0, 0);
  }
  .material-icon-sharp-signal_cellular_connected_no_internet_3_bar
    .path1:before {
    content: '\\ec61';
    color: rgb(0, 0, 0);
    opacity: 0.3;
  }
  .material-icon-sharp-signal_cellular_connected_no_internet_3_bar
    .path2:before {
    content: '\\ec62';
    margin-left: -1em;
    color: rgb(0, 0, 0);
  }
  .material-icon-sharp-signal_cellular_connected_no_internet_4_bar:before {
    content: '\\ec63';
  }
  .material-icon-sharp-signal_cellular_no_sim:before {
    content: '\\ec64';
  }
  .material-icon-sharp-signal_cellular_null:before {
    content: '\\ec65';
  }
  .material-icon-sharp-signal_cellular_off:before {
    content: '\\ec66';
  }
  .material-icon-sharp-signal_wifi_0_bar:before {
    content: '\\ec67';
  }
  .material-icon-sharp-signal_wifi_1_bar .path1:before {
    content: '\\ec68';
    color: rgb(0, 0, 0);
    opacity: 0.3;
  }
  .material-icon-sharp-signal_wifi_1_bar .path2:before {
    content: '\\ec69';
    margin-left: -1em;
    color: rgb(0, 0, 0);
  }
  .material-icon-sharp-signal_wifi_1_bar_lock .path1:before {
    content: '\\ec6a';
    color: rgb(0, 0, 0);
  }
  .material-icon-sharp-signal_wifi_1_bar_lock .path2:before {
    content: '\\ec6b';
    margin-left: -1em;
    color: rgb(0, 0, 0);
    opacity: 0.3;
  }
  .material-icon-sharp-signal_wifi_1_bar_lock .path3:before {
    content: '\\ec6c';
    margin-left: -1em;
    color: rgb(0, 0, 0);
  }
  .material-icon-sharp-signal_wifi_2_bar .path1:before {
    content: '\\ec6d';
    color: rgb(0, 0, 0);
    opacity: 0.3;
  }
  .material-icon-sharp-signal_wifi_2_bar .path2:before {
    content: '\\ec6e';
    margin-left: -1em;
    color: rgb(0, 0, 0);
  }
  .material-icon-sharp-signal_wifi_2_bar_lock .path1:before {
    content: '\\ec6f';
    color: rgb(0, 0, 0);
  }
  .material-icon-sharp-signal_wifi_2_bar_lock .path2:before {
    content: '\\ec70';
    margin-left: -1em;
    color: rgb(0, 0, 0);
    opacity: 0.3;
  }
  .material-icon-sharp-signal_wifi_2_bar_lock .path3:before {
    content: '\\ec71';
    margin-left: -1em;
    color: rgb(0, 0, 0);
  }
  .material-icon-sharp-signal_wifi_3_bar .path1:before {
    content: '\\ec72';
    color: rgb(0, 0, 0);
    opacity: 0.3;
  }
  .material-icon-sharp-signal_wifi_3_bar .path2:before {
    content: '\\ec73';
    margin-left: -1em;
    color: rgb(0, 0, 0);
  }
  .material-icon-sharp-signal_wifi_3_bar_lock .path1:before {
    content: '\\ec74';
    color: rgb(0, 0, 0);
    opacity: 0.3;
  }
  .material-icon-sharp-signal_wifi_3_bar_lock .path2:before {
    content: '\\ec75';
    margin-left: -1em;
    color: rgb(0, 0, 0);
  }
  .material-icon-sharp-signal_wifi_4_bar:before {
    content: '\\ec76';
  }
  .material-icon-sharp-signal_wifi_4_bar_lock:before {
    content: '\\ec77';
  }
  .material-icon-sharp-signal_wifi_off:before {
    content: '\\ec78';
  }
  .material-icon-sharp-sim_card:before {
    content: '\\ec79';
  }
  .material-icon-sharp-skip_next:before {
    content: '\\ec7a';
  }
  .material-icon-sharp-skip_previous:before {
    content: '\\ec7b';
  }
  .material-icon-sharp-slideshow:before {
    content: '\\ec7c';
  }
  .material-icon-sharp-slow_motion_video:before {
    content: '\\ec7d';
  }
  .material-icon-sharp-smartphone:before {
    content: '\\ec7e';
  }
  .material-icon-sharp-smoke_free:before {
    content: '\\ec7f';
  }
  .material-icon-sharp-smoking_rooms:before {
    content: '\\ec80';
  }
  .material-icon-sharp-sms:before {
    content: '\\ec81';
  }
  .material-icon-sharp-sms_failed:before {
    content: '\\ec82';
  }
  .material-icon-sharp-snooze:before {
    content: '\\ec83';
  }
  .material-icon-sharp-sort:before {
    content: '\\ec84';
  }
  .material-icon-sharp-sort_by_alpha:before {
    content: '\\ec85';
  }
  .material-icon-sharp-spa:before {
    content: '\\ec86';
  }
  .material-icon-sharp-space_bar:before {
    content: '\\ec87';
  }
  .material-icon-sharp-speaker:before {
    content: '\\ec88';
  }
  .material-icon-sharp-speaker_group:before {
    content: '\\ec89';
  }
  .material-icon-sharp-speaker_notes:before {
    content: '\\ec8a';
  }
  .material-icon-sharp-speaker_notes_off:before {
    content: '\\ec8b';
  }
  .material-icon-sharp-speaker_phone:before {
    content: '\\ec8c';
  }
  .material-icon-sharp-spellcheck:before {
    content: '\\ec8d';
  }
  .material-icon-sharp-star:before {
    content: '\\ec8e';
  }
  .material-icon-sharp-star_border:before {
    content: '\\ec8f';
  }
  .material-icon-sharp-star_half:before {
    content: '\\ec90';
  }
  .material-icon-sharp-star_rate:before {
    content: '\\ec91';
  }
  .material-icon-sharp-stars:before {
    content: '\\ec92';
  }
  .material-icon-sharp-stay_current_landscape:before {
    content: '\\ec93';
  }
  .material-icon-sharp-stay_current_portrait:before {
    content: '\\ec94';
  }
  .material-icon-sharp-stay_primary_landscape:before {
    content: '\\ec95';
  }
  .material-icon-sharp-stay_primary_portrait:before {
    content: '\\ec96';
  }
  .material-icon-sharp-stop:before {
    content: '\\ec97';
  }
  .material-icon-sharp-stop_screen_share:before {
    content: '\\ec98';
  }
  .material-icon-sharp-storage:before {
    content: '\\ec99';
  }
  .material-icon-sharp-store:before {
    content: '\\ec9a';
  }
  .material-icon-sharp-store_mall_directory:before {
    content: '\\ec9b';
  }
  .material-icon-sharp-straighten:before {
    content: '\\ec9c';
  }
  .material-icon-sharp-streetview:before {
    content: '\\ec9d';
  }
  .material-icon-sharp-strikethrough_s:before {
    content: '\\ec9e';
  }
  .material-icon-sharp-style:before {
    content: '\\ec9f';
  }
  .material-icon-sharp-subdirectory_arrow_left:before {
    content: '\\eca0';
  }
  .material-icon-sharp-subdirectory_arrow_right:before {
    content: '\\eca1';
  }
  .material-icon-sharp-subject:before {
    content: '\\eca2';
  }
  .material-icon-sharp-subscriptions:before {
    content: '\\eca3';
  }
  .material-icon-sharp-subtitles:before {
    content: '\\eca4';
  }
  .material-icon-sharp-subway:before {
    content: '\\eca5';
  }
  .material-icon-sharp-supervised_user_circle:before {
    content: '\\eca6';
  }
  .material-icon-sharp-supervisor_account:before {
    content: '\\eca7';
  }
  .material-icon-sharp-surround_sound:before {
    content: '\\eca8';
  }
  .material-icon-sharp-swap_calls:before {
    content: '\\eca9';
  }
  .material-icon-sharp-swap_horiz:before {
    content: '\\ecaa';
  }
  .material-icon-sharp-swap_horizontal_circle:before {
    content: '\\ecab';
  }
  .material-icon-sharp-swap_vert:before {
    content: '\\ecac';
  }
  .material-icon-sharp-swap_vertical_circle:before {
    content: '\\ecad';
  }
  .material-icon-sharp-switch_camera:before {
    content: '\\ecae';
  }
  .material-icon-sharp-switch_video:before {
    content: '\\ecaf';
  }
  .material-icon-sharp-sync:before {
    content: '\\ecb0';
  }
  .material-icon-sharp-sync_disabled:before {
    content: '\\ecb1';
  }
  .material-icon-sharp-sync_problem:before {
    content: '\\ecb2';
  }
  .material-icon-sharp-system_update:before {
    content: '\\ecb3';
  }
  .material-icon-sharp-tab:before {
    content: '\\ecb4';
  }
  .material-icon-sharp-table_chart:before {
    content: '\\ecb5';
  }
  .material-icon-sharp-tablet:before {
    content: '\\ecb6';
  }
  .material-icon-sharp-tablet_android:before {
    content: '\\ecb7';
  }
  .material-icon-sharp-tablet_mac:before {
    content: '\\ecb8';
  }
  .material-icon-sharp-tab_unselected:before {
    content: '\\ecb9';
  }
  .material-icon-sharp-tag_faces:before {
    content: '\\ecba';
  }
  .material-icon-sharp-tap_and_play:before {
    content: '\\ecbb';
  }
  .material-icon-sharp-terrain:before {
    content: '\\ecbc';
  }
  .material-icon-sharp-text_fields:before {
    content: '\\ecbd';
  }
  .material-icon-sharp-text_format:before {
    content: '\\ecbe';
  }
  .material-icon-sharp-text_rotate_up:before {
    content: '\\ecbf';
  }
  .material-icon-sharp-text_rotate_vertical:before {
    content: '\\ecc0';
  }
  .material-icon-sharp-text_rotation_down:before {
    content: '\\ecc1';
  }
  .material-icon-sharp-text_rotation_none:before {
    content: '\\ecc2';
  }
  .material-icon-sharp-textsms:before {
    content: '\\ecc3';
  }
  .material-icon-sharp-texture:before {
    content: '\\ecc4';
  }
  .material-icon-sharp-theaters:before {
    content: '\\ecc5';
  }
  .material-icon-sharp-thumb_down:before {
    content: '\\ecc6';
  }
  .material-icon-sharp-thumb_down_alt:before {
    content: '\\ecc7';
  }
  .material-icon-sharp-thumbs_up_down:before {
    content: '\\ecc8';
  }
  .material-icon-sharp-thumb_up:before {
    content: '\\ecc9';
  }
  .material-icon-sharp-thumb_up_alt:before {
    content: '\\ecca';
  }
  .material-icon-sharp-timelapse:before {
    content: '\\eccb';
  }
  .material-icon-sharp-timeline:before {
    content: '\\eccc';
  }
  .material-icon-sharp-timer:before {
    content: '\\eccd';
  }
  .material-icon-sharp-timer_3:before {
    content: '\\ecce';
  }
  .material-icon-sharp-timer_10:before {
    content: '\\eccf';
  }
  .material-icon-sharp-timer_off:before {
    content: '\\ecd0';
  }
  .material-icon-sharp-time_to_leave:before {
    content: '\\ecd1';
  }
  .material-icon-sharp-title:before {
    content: '\\ecd2';
  }
  .material-icon-sharp-toc:before {
    content: '\\ecd3';
  }
  .material-icon-sharp-today:before {
    content: '\\ecd4';
  }
  .material-icon-sharp-toggle_off:before {
    content: '\\ecd5';
  }
  .material-icon-sharp-toggle_on:before {
    content: '\\ecd6';
  }
  .material-icon-sharp-toll:before {
    content: '\\ecd7';
  }
  .material-icon-sharp-tonality:before {
    content: '\\ecd8';
  }
  .material-icon-sharp-touch_app:before {
    content: '\\ecd9';
  }
  .material-icon-sharp-toys:before {
    content: '\\ecda';
  }
  .material-icon-sharp-track_changes:before {
    content: '\\ecdb';
  }
  .material-icon-sharp-traffic:before {
    content: '\\ecdc';
  }
  .material-icon-sharp-train:before {
    content: '\\ecdd';
  }
  .material-icon-sharp-tram:before {
    content: '\\ecde';
  }
  .material-icon-sharp-transfer_within_a_station:before {
    content: '\\ecdf';
  }
  .material-icon-sharp-transform:before {
    content: '\\ece0';
  }
  .material-icon-sharp-transit_enterexit:before {
    content: '\\ece1';
  }
  .material-icon-sharp-translate:before {
    content: '\\ece2';
  }
  .material-icon-sharp-trending_down:before {
    content: '\\ece3';
  }
  .material-icon-sharp-trending_flat:before {
    content: '\\ece4';
  }
  .material-icon-sharp-trending_up:before {
    content: '\\ece5';
  }
  .material-icon-sharp-trip_origin:before {
    content: '\\ece6';
  }
  .material-icon-sharp-tune:before {
    content: '\\ece7';
  }
  .material-icon-sharp-turned_in:before {
    content: '\\ece8';
  }
  .material-icon-sharp-turned_in_not:before {
    content: '\\ece9';
  }
  .material-icon-sharp-tv:before {
    content: '\\ecea';
  }
  .material-icon-sharp-tv_off:before {
    content: '\\eceb';
  }
  .material-icon-sharp-unarchive:before {
    content: '\\ecec';
  }
  .material-icon-sharp-undo:before {
    content: '\\eced';
  }
  .material-icon-sharp-unfold_less:before {
    content: '\\ecee';
  }
  .material-icon-sharp-unfold_more:before {
    content: '\\ecef';
  }
  .material-icon-sharp-unsubscribe:before {
    content: '\\ecf0';
  }
  .material-icon-sharp-update:before {
    content: '\\ecf1';
  }
  .material-icon-sharp-usb:before {
    content: '\\ecf2';
  }
  .material-icon-sharp-verified_user:before {
    content: '\\ecf3';
  }
  .material-icon-sharp-vertical_align_bottom:before {
    content: '\\ecf4';
  }
  .material-icon-sharp-vertical_align_center:before {
    content: '\\ecf5';
  }
  .material-icon-sharp-vertical_align_top:before {
    content: '\\ecf6';
  }
  .material-icon-sharp-vertical_split:before {
    content: '\\ecf7';
  }
  .material-icon-sharp-vibration:before {
    content: '\\ecf8';
  }
  .material-icon-sharp-video_call:before {
    content: '\\ecf9';
  }
  .material-icon-sharp-videocam:before {
    content: '\\ecfa';
  }
  .material-icon-sharp-videocam_off:before {
    content: '\\ecfb';
  }
  .material-icon-sharp-videogame_asset:before {
    content: '\\ecfc';
  }
  .material-icon-sharp-video_label:before {
    content: '\\ecfd';
  }
  .material-icon-sharp-video_library:before {
    content: '\\ecfe';
  }
  .material-icon-sharp-view_agenda:before {
    content: '\\ecff';
  }
  .material-icon-sharp-view_array:before {
    content: '\\ed00';
  }
  .material-icon-sharp-view_carousel:before {
    content: '\\ed01';
  }
  .material-icon-sharp-view_column:before {
    content: '\\ed02';
  }
  .material-icon-sharp-view_comfy:before {
    content: '\\ed03';
  }
  .material-icon-sharp-view_compact:before {
    content: '\\ed04';
  }
  .material-icon-sharp-view_day:before {
    content: '\\ed05';
  }
  .material-icon-sharp-view_headline:before {
    content: '\\ed06';
  }
  .material-icon-sharp-view_list:before {
    content: '\\ed07';
  }
  .material-icon-sharp-view_module:before {
    content: '\\ed08';
  }
  .material-icon-sharp-view_quilt:before {
    content: '\\ed09';
  }
  .material-icon-sharp-view_stream:before {
    content: '\\ed0a';
  }
  .material-icon-sharp-view_week:before {
    content: '\\ed0b';
  }
  .material-icon-sharp-vignette:before {
    content: '\\ed0c';
  }
  .material-icon-sharp-visibility:before {
    content: '\\ed0d';
  }
  .material-icon-sharp-visibility_off:before {
    content: '\\ed0e';
  }
  .material-icon-sharp-voice_chat:before {
    content: '\\ed0f';
  }
  .material-icon-sharp-voicemail:before {
    content: '\\ed10';
  }
  .material-icon-sharp-voice_over_off:before {
    content: '\\ed11';
  }
  .material-icon-sharp-volume_down:before {
    content: '\\ed12';
  }
  .material-icon-sharp-volume_mute:before {
    content: '\\ed13';
  }
  .material-icon-sharp-volume_off:before {
    content: '\\ed14';
  }
  .material-icon-sharp-volume_up:before {
    content: '\\ed15';
  }
  .material-icon-sharp-vpn_key:before {
    content: '\\ed16';
  }
  .material-icon-sharp-vpn_lock:before {
    content: '\\ed17';
  }
  .material-icon-sharp-wallpaper:before {
    content: '\\ed18';
  }
  .material-icon-sharp-warning:before {
    content: '\\ed19';
  }
  .material-icon-sharp-watch:before {
    content: '\\ed1a';
  }
  .material-icon-sharp-watch_later:before {
    content: '\\ed1b';
  }
  .material-icon-sharp-waves:before {
    content: '\\ed1c';
  }
  .material-icon-sharp-wb_auto:before {
    content: '\\ed1d';
  }
  .material-icon-sharp-wb_cloudy:before {
    content: '\\ed1e';
  }
  .material-icon-sharp-wb_incandescent:before {
    content: '\\ed1f';
  }
  .material-icon-sharp-wb_iridescent:before {
    content: '\\ed20';
  }
  .material-icon-sharp-wb_sunny:before {
    content: '\\ed21';
  }
  .material-icon-sharp-wc:before {
    content: '\\ed22';
  }
  .material-icon-sharp-web:before {
    content: '\\ed23';
  }
  .material-icon-sharp-web_asset:before {
    content: '\\ed24';
  }
  .material-icon-sharp-weekend:before {
    content: '\\ed25';
  }
  .material-icon-sharp-whatshot:before {
    content: '\\ed26';
  }
  .material-icon-sharp-where_to_vote:before {
    content: '\\ed27';
  }
  .material-icon-sharp-widgets:before {
    content: '\\ed28';
  }
  .material-icon-sharp-wifi:before {
    content: '\\ed29';
  }
  .material-icon-sharp-wifi_lock:before {
    content: '\\ed2a';
  }
  .material-icon-sharp-wifi_off:before {
    content: '\\ed2b';
  }
  .material-icon-sharp-wifi_tethering:before {
    content: '\\ed2c';
  }
  .material-icon-sharp-work:before {
    content: '\\ed2d';
  }
  .material-icon-sharp-work_off:before {
    content: '\\ed2e';
  }
  .material-icon-sharp-work_outline:before {
    content: '\\ed2f';
  }
  .material-icon-sharp-wrap_text:before {
    content: '\\ed30';
  }
  .material-icon-sharp-youtube_searched_for:before {
    content: '\\ed31';
  }
  .material-icon-sharp-zoom_in:before {
    content: '\\ed32';
  }
  .material-icon-sharp-zoom_out:before {
    content: '\\ed33';
  }
  .material-icon-sharp-zoom_out_map:before {
    content: '\\ed34';
  }
`
