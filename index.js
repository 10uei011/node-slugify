'use strict';

module.exports = function (string, options) {
  if (!string) return '';

  options = options || {};
  var maintainCase = options.maintainCase;
  var replacement = options.replacement || '-';
  var maxLen = options.maxLen || 80;
  var prevdash = false;
  var sb = [ ];
  var url;
  var c;

  for (var i = 0; i < string.length; ++i) {
    c = string[i];
    if ((c >= 'a' && c <= 'z') || (c >= '0' && c <= '9')) {
      sb.push(c);
      prevdash = false;
    } else if (c >= 'A' && c <= 'Z') {
      if (maintainCase) {
        sb.push(c);
      } else {
        sb.push(c.toLowerCase());
      }
      prevdash = false;
    } else if (c === ' ' || c === ',' || c === '.' || c === '/' ||
      c === '\\' || c === '-' || c === '_' || c === '=') {
      if (!prevdash && sb.length > 0) {
        sb.push(replacement);
        prevdash = true;
      }
    } else if (c.charCodeAt(0) >= 128) {
      var remapped = remapInternationalCharToAscii(c);
      if (remapped) {
        sb.push(remapped);
        prevdash = false;
      }
    }
    if (sb.length === maxLen) break;
  }
  if (prevdash) {
    return sb.join('').substring(0, sb.length - 1);
  } else {
    return sb.join('');
  }
}

function remapInternationalCharToAscii (c) {
  if ('àåáâãåa'.indexOf(c) !== -1) return 'a';
  else if ('èéêe'.indexOf(c) !== -1) return 'e';
  else if ('ìíîïi'.indexOf(c) !== -1) return 'i';
  else if ('òóôõøoð'.indexOf(c) !== -1) return 'o';
  else if ('ùúûuu'.indexOf(c) !== -1) return 'u';
  else if ('çccc'.indexOf(c) !== -1) return 'c';
  else if ('zzž'.indexOf(c) !== -1) return 'z';
  else if ('ssšs'.indexOf(c) !== -1) return 's';
  else if ('ñn'.indexOf(c) !== -1) return 'n';
  else if ('ýÿ'.indexOf(c) !== -1) return 'y';
  else if ('gg'.indexOf(c) !== -1) return 'g';
  else if (c === 'r') return 'r';
  else if (c === 'l') return 'l';
  else if (c === 'd') return 'd';
  else if (c === 'ä') return 'ae';
  else if (c === 'ö') return 'oe';
  else if (c === 'ü') return 'ue';
  else if (c === 'ß') return 'ss';
  else if (c === 'Þ') return 'th';
  else if (c === 'h') return 'h';
  else if (c === 'j') return 'j';
  else return '';
}
