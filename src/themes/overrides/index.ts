//

import Button from './Button';
import Card from './Card';
import Input from './Input';

// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme: any) {
  return Object.assign(Button(theme), Input(theme), Card(theme));
}
