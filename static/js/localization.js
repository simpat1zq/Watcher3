/* Dictionary file to use for javascript localization.

Translatable strings are implimented in code with _("this will be translated")

The language code is determined my the meta tag <meta name="language" content="en" />

Languages are distinguished by the first two letters of the language code in lower case (ie "en", "es", "de")

Any language supported by the main application can be created here.

To add a language:
    Add the language code as a key in the 'translations' object
    Add a nested JSON object as the value for the language key
    Enter Key:Value pairs of the english phrase: translated phrase

    Example (this may not be an accurate translation):
    {"es": {"one": "uno",
            "two": "dos",
            "Please select a ZIP file.": "Seleccione un archivo ZIP."
            }
    }

*/


translations =
{"es": {"this is a test": "esto es una prueba",
        "one": "uno",
        "Please select a ZIP file.": "Seleccione un archivo ZIP."
        }
 }