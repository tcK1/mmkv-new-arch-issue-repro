/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {MMKV} from 'react-native-mmkv';

export const encryptedStorage = new MMKV({
  id: 'instance-id',
  encryptionKey: 'secret-pwd',
});

const KEY = 'key';
const VALUE_WORKS =
  '[Qtdiwf-DwGR8#?9rkScC[r&Zzf*5t[6whBz[gaS&9Cd5#JQL*-wQ:8FdSM!0;jvjrA,AkUuKfdxdnEt-e_&gbn9.;&TRZ]gy8[}gx*@1.:wJ;$zT9KiQdLTCMn(Qy!;xebRY:CtjdQynyc.=qY9.,(vT[B1py@_aVyLL?Sji_?0JM(:*/DhrMJ[N!&wS69i9xA,Yjmb[A+u&eN}*N/?&(6?4x_@a{yK6!kGj1H{7WPwG9H9pd?@7,*_yJJ[*';
const VALUE_BROKEN =
  '[Qtdiwf-DwGR8#?9rkScC[r&Zzf*5t[6whBz[gaS&9Cd5#JQL*-wQ:8FdSM!0;jvjrA,AkUuKfdxdnEt-e_&gbn9.;&TRZ]gy8[}gx*@1.:wJ;$zT9KiQdLTCMn(Qy!;xebRY:CtjdQynyc.=qY9.,(vT[B1py@_aVyLL?Sji_?0JM(:*/DhrMJ[N!&wS69i9xA,Yjmb[A+u&eN}*N/?&(6?4x_@a{yK6!kGj1H{7WPwG9H9pd?@7,*_yJJ[*+';
const BIGGER_VALUE_BROKEN =
  '[Qtdiwf-DwGR8#?9rkScC[r&Zzf*5t[6whBz[gaS&9Cd5#JQL*-wQ:8FdSM!0;jvjrA,AkUuKfdxdnEt-e_&gbn9.;&TRZ]gy8[}gx*@1.:wJ;$zT9KiQdLTCMn(Qy!;xebRY:CtjdQynyc.=qY9.,(vT[B1py@_aVyLL?Sji_?0JM(:*/DhrMJ[N!&wS69i9xA,Yjmb[A+u&eN}*N/?&(6?4x_@a{yK6!kGj1H{7WPwG9H9pd?@7,*_yJJ[*+' +
  '[Qtdiwf-DwGR8#?9rkScC[r&Zzf*5t[6whBz[gaS&9Cd5#JQL*-wQ:8FdSM!0;jvjrA,AkUuKfdxdnEt-e_&gbn9.;&TRZ]gy8[}gx*@1.:wJ;$zT9KiQdLTCMn(Qy!;xebRY:CtjdQynyc.=qY9.,(vT[B1py@_aVyLL?Sji_?0JM(:*/DhrMJ[N!&wS69i9xA,Yjmb[A+u&eN}*N/?&(6?4x_@a{yK6!kGj1H{7WPwG9H9pd?@7,*_yJJ[*+';

encryptedStorage.set(KEY, VALUE_BROKEN);

console.log('[Retreive]:', encryptedStorage.getString(KEY));

AppRegistry.registerComponent(appName, () => App);
