# jQuery Translation

jQuery Translation is a [jQuery](http://jquery.com/) plugin which enables you to translate text on the client side.

## Getting Started

You can install the plugin using Bower:

```bash
bower install jquery-trans
```

## Uses a predefined dictionary

You can get or set the dictionary the plugin uses by calling `$.setTranslator`. It is a object made by key-value pairs, with the original sentence or string id as key, and the translated sentence as value (or a translating function, see below).

```javascript
$.setTranslator({
    'Unable to load page': 'Unable to load page',
});
```

### How I use this in Laravel

Most of my projects have a partial called `translations.blade.php` that uses Laravel's translation system to set the value and is included at the end of the primary layout. My partial looks like this:

```php
<script type="text/javascript">
$.setTranslator({!! json_encode([
    // Buttons
    'buttons.OK' => trans('buttons.OK'),
    'buttons.Cancel' => trans('buttons.Cancel'),
    'buttons.Back' => trans('navigation.Back'),
    'buttons.Submit' => trans('buttons.Submit'),
    'buttons.Next' => trans('buttons.Next'),
    'buttons.Edit' => trans('buttons.Edit'),
    'buttons.Update' => trans('buttons.Update'),
    'buttons.Create' => trans('buttons.Create'),
    'buttons.Delete' => trans('buttons.Delete'),
    'buttons.Report' => trans('buttons.Report'),
    'buttons.Share' => trans('buttons.Share'),
    'buttons.Post' => trans('buttons.Post'),

    // Dates
    'date.now' => trans('date.now'),
    'date.pluralize_year' => trans('date.pluralize_year'),
    'date.pluralize_month' => trans('date.pluralize_month'),
    'date.pluralize_day' => trans('date.pluralize_day'),
    'date.pluralize_hour' => trans('date.pluralize_hour'),
    'date.pluralize_minute' => trans('date.pluralize_minute'),
    'date.pluralize_second' => trans('date.pluralize_second'),
]) !!});
</script>
```

## Replaces parameters in translations

Because the order of words may change between languages, the use of parameters is necessary. A parameter is indicated by a `:` followed by an identifier in the sentences. Give an associative map as second argument to the translator function, which contains identifiers as keys and replacement texts as values.

```javascript
$.trans('Welcome :name to the new :place', {
    name: 'Jane Doe',
    place: 'Burger Hut'
})
```

## API

```javascript
// Simple string translation
$.trans(key, opt)

// Retrieve the line for a given "count"
$.trans_choice(key, count);

// Sets translations
$.setTranslator();
```
