/* ========================================================================
 * jQuery Translation
 * ========================================================================
 * Copyright 2014 Daniel Stainback
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */

(function($) {

    // Dictionary.
    var dictionary = {};

    /**
     * Standard replace function.
     */
    var replace = function (str, opt) {
        var args = (typeof opt === 'object' && opt != null) ? opt : arguments;
        return str.replace(/:(\w+)/g, function(match, n) {
            var value = args[n];
            if (value === undefined) {
                return match;
            }
            return value;
        });
    };

    // time to get the real translator
    $.trans = function(key, opt) {
        var value = dictionary[key] || key;
        var args = (typeof opt === 'object' && opt != null) ? opt : arguments;

        if (typeof value === 'string') {
            return replace(value, args);
        }
        else if (typeof value === 'function') {
            return value(args, replace);
        }
        else if (typeof value === 'number') {
            return value;
        }
        else if (key) {
            return replace(key, args);
        }

        return key;
    };

    $.trans_choice = function(key, count) {
        var value = dictionary[key] || key;
        parts = value.split('|');

        if (parts.length < 2 || count === 1) {
            return parts[0];
        }
        else {
            return $.trans(parts[1], {
                'count': count
            });
        }
    };

    $.setTranslator = function(dict) {
        if (typeof dict == 'object') {
            dictionary = dict;
        }
    };

})(jQuery);
