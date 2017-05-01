import _t from 'mady';

import en from './locales/en';
import es from './locales/es';

export default function init() {
  _t.addLocales('en', en);
  _t.addLocales('es', es);

  _t.setLocales('en');
}
