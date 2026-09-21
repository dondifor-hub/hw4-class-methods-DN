/**
 * # Part 3) NotePad
 * We recommend you do this file third. If you haven't already done
 * person.ts, then go there first!
 * 
 * 3.1 Create a class named `NotePad` that has a public string field `title` and a public field `notes` that is an array of strings.
 * 3.2. Create a NotePad constructor that takes in two parameters (title, notes) and assigns them to the appropriate fields.
 * 3.3. Create a NotePad method named `add` that takes in one string parameter (note) and adds it to the notes array, unless
 *      the string is empty.
 * 3.4. Create a NotePad method named `getNotes` that returns the notes array as a single string with each note
 *      separated by a new line.
 * 3.5. Create a NotePad method named `getPriorityNotes` that returns the notes array as a single string with each
 *      note separated by a new line, but only if the note contains the word "priority" in any of its `notes` elements.
 *      If there are no priority notes, return an empty string. HINT: you can use the `includes` method for strings.
 * 3.6. Create a NotePad method named `clone` that returns a new NotePad object with the same title and notes, but a separate
 *      copy of the notes array. This means that if you change the notes of the original notepad, the notes of the clone should not change.
 */