'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    Vidalytics?: any;
    _Vidalytics?: any;
    VidalyticsL?: any;
  }
}

const useVidalyticsPlayer = () => {
  useEffect(() => {
    // Only run on client-side
    if (typeof window === 'undefined') return;

    // Check if script is already loaded
    if (window.Vidalytics) return;

    const initVidalytics = () => {
      ;(function (v: any, i: Document, d: string, a: string, l: string, y: string, t: any, c: any, s: any) {
        y = '_' + d.toLowerCase();
        c = d + 'L';
        if (!v[d]) {
          v[d] = {};
        }
        if (!v[c]) {
          v[c] = {};
        }
        if (!v[y]) {
          v[y] = {};
        }
        var vl = 'Loader',
          vli = v[y][vl],
          vsl = v[c][vl + 'Script'],
          vlf = v[c][vl + 'Loaded'],
          ve = 'Embed';
        if (!vsl) {
          vsl = function (u: string, cb: () => void) {
            if (t) {
              cb();
              return;
            }
            s = i.createElement('script');
            s.type = 'text/javascript';
            s.async = 1;
            s.src = u;
            if ((s as any).readyState) {
              (s as any).onreadystatechange = function () {
                if (s.readyState === 'loaded' || s.readyState === 'complete') {
                  (s as any).onreadystatechange = null;
                  vlf = 1;
                  cb();
                }
              };
            } else {
              s.onload = function () {
                vlf = 1;
                cb();
              };
            }
            i.getElementsByTagName('head')[0].appendChild(s);
          };
        }
        vsl(l + 'loader.min.js', function () {
          if (!vli) {
            var vlc = v[c][vl];
            vli = new vlc();
          }
          vli.loadScript(l + 'player.min.js', function () {
            var vec = (v as any)[d][ve];
            t = new vec();
            t.run(a);
          });
        });
      })(
        window,
        document,
        'Vidalytics',
        'vidalytics_embed_iyFI_qiQT5gw4Arh',
        'https://quick.vidalytics.com/embeds/IgKBDqAD/iyFI_qiQT5gw4Arh/',
        undefined as any, // y (will be set to _vidalytics inside the function)
        undefined as any, // t (will be set inside the function)
        undefined as any, // c (will be set inside the function)
        undefined as any  // s (will be set inside the function)
      );
    };

    // Initialize the player
    initVidalytics();

    // Cleanup function
    return () => {
      // Add any cleanup code here if needed
    };
  }, []);
};

export default useVidalyticsPlayer;
