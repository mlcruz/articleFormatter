export = index;
declare class index {
  static async(data: any, options: any, callback: any): any;
  static input(args: any): any;
  static inputAsync(...args: any[]): any;
  static validateOptions(options: any): any;
  static validateOutputOptions(options: any): any;
  static version: {
    cite: string;
    citeproc: string;
  };
  constructor(data: any, opts?: any);
  log: any;
  data: any;
  add(data: any, options: any, log: any): any;
  addAsync(_x: any, ...args: any[]): any;
  currentVersion(): any;
  format(_format: any, options: any): any;
  get(options: any): any;
  getIds(): any;
  options(_options: any, log: any): any;
  reset(log: any): any;
  retrieveLastVersion(): any;
  retrieveVersion(versnum: any): any;
  save(): any;
  set(data: any, options: any, log: any): any;
  setAsync(_x2: any, ...args: any[]): any;
  sort(method: any, log: any): any;
  undo(number: any): any;
}
declare namespace index {
  namespace CSL {
    function engine(
      style: any,
      lang: any,
      template: any,
      retrieveItem: any,
      retrieveLocale: any
    ): any;
    function item(data: any): any;
    function locale(lang: any): any;
    namespace register {
      function addLocale(): any;
      function addTemplate(): any;
      function getLocale(p0: any): any;
      function getTemplate(p0: any): any;
      function hasLocale(p0: any): any;
      function hasTemplate(p0: any): any;
    }
    function style(style: any): any;
  }
  namespace get {
    function add(name: any, formatter: any): void;
    namespace bibtex {
      function json(src: any): any;
      function label(entry: any): any;
      function text(src: any, html: any): any;
      function type(pubType: any): any;
    }
    function bibtxt(src: any, html: any): any;
    function date(date: any, delimiter: any): any;
    namespace dict {
      function add(name: any, dict: any): void;
      function get(name: any): any;
      function has(name: any): any;
      const htmlDict: {
        en_end: string;
        en_start: string;
        li_end: string;
        li_start: string;
        ul_end: string;
        ul_start: string;
        wr_end: string;
        wr_start: string;
      };
      function list(): any;
      const register: {
        data: {
          html: any;
          text: any;
        };
      };
      function remove(name: any): void;
      const textDict: {
        en_end: string;
        en_start: string;
        li_end: string;
        li_start: string;
        ul_end: string;
        ul_start: string;
        wr_end: string;
        wr_start: string;
      };
    }
    function format(name: any, data: any, options: any): any;
    function has(name: any): any;
    function json(
      data: any,
      {
        type,
        //@ts-ignore
        format = type || "text"
      }: any
    ): any;
    function label(data: any): any;
    function list(): any;
    function name(name: any, reversed: any): any;
    const register: {
      data: {
        bibliography: Function;
        bibtex: Function;
        bibtxt: Function;
        citation: Function;
        data: Function;
        label: Function;
        ndjson: Function;
        ris: Function;
      };
    };
    function remove(name: any): void;
  }
  namespace parse {
    function add(format: any, parsers: any): void;
    function addDataParser(format: any, { parser, async }: any): void;
    function addTypeParser(
      format: any,
      { dataType, predicate, extends: extend }: any
    ): void;
    function bibjson(data: any): any;
    namespace bibtex {
      function json(data: any): any;
      function prop(name: any, value: any): any;
      function text(str: any): any;
      function type(pubType: any): any;
    }
    namespace bibtxt {
      function text(src: any): void;
      function textEntry(entry: any): any;
    }
    function chain(args: any): any;
    function chainAsync(...args: any[]): any;
    function chainLink(input: any): any;
    function chainLinkAsync(_x: any, ...args: any[]): any;
    function csl(data: any): any;
    function data(input: any, type: any): any;
    function dataAsync(_x2: any, _x3: any, ...args: any[]): any;
    function date(value: any): any;
    namespace doi {
      function api(data: any): void;
      namespace async {
        function api(_x2: any, ...args: any[]): any;
      }
      function id(data: any): any;
    }
    function get(format: any): any;
    function has(format: any): void;
    function hasDataParser(type: any, async: any): void;
    function hasTypeParser(type: any): void;
    namespace input {
      namespace async {
        function chain(...args: any[]): any;
        function chainLink(_x: any, ...args: any[]): any;
        function data(_x2: any, _x3: any, ...args: any[]): any;
      }
      function chain(args: any): any;
      function chainAsync(...args: any[]): any;
      function chainLink(input: any): any;
      function chainLinkAsync(_x: any, ...args: any[]): any;
      function data(input: any, type: any): any;
      function dataAsync(_x2: any, _x3: any, ...args: any[]): any;
      function type(input: any): any;
    }
    function json(str: any): any;
    function list(): void;
    function listDataParser(async: any): void;
    function listTypeParser(): void;
    function name(name: any): any;
    function remove(format: any): void;
    function removeDataParser(type: any, async: any): void;
    function removeTypeParser(type: any): void;
    function treeTypeParser(): any;
    function type(input: any): any;
    const typeMatcher: {};
    namespace util {
      class DataParser {
        constructor(parser: any, { async }: any);
        parser: any;
        async: any;
        validate(): void;
      }
      class FormatParser {
        constructor(format: any, parsers: any);
        format: any;
        typeParser: any;
        dataParser: any;
        asyncDataParser: any;
        validate(): void;
        validateFormat(): void;
      }
      class TypeParser {
        constructor(data: any);
        data: any;
        getCombinedPredicate(): any;
        getDataType(): any;
        parseElementConstraint(): any;
        parsePredicate(): any;
        parsePropertyConstraint(): any;
        parseTokenList(): any;
        validate(): void;
        validateDataType(): void;
        validateElementConstraint(): void;
        validateExtends(): void;
        validateParseType(): void;
        validatePropertyConstraint(): void;
        validateTokenList(): void;
      }
      function applyGraph(entry: any, graph: any): any;
      function dataTypeOf(thing: any): any;
      function removeGraph(entry: any): any;
      function typeOf(thing: any): any;
    }
    namespace wikidata {
      namespace async {
        function json(_x3: any, ...args: any[]): any;
        function prop(_x3: any, _x4: any, _x5: any, ...args: any[]): any;
      }
      function json({ entities }: any): any;
      function list(data: any, langs: any): any;
      function prop(prop: any, values: any, langs: any): any;
      function type(type: any): any;
    }
  }
  namespace plugins {
    function add(ref: any, plugins: any): void;
    namespace config {
      function add(ref: any, config: any): void;
      function get(ref: any): void;
      function remove(ref: any): void;
    }
    namespace dict {
      function add(name: any, dict: any): void;
      function get(name: any): any;
      function has(name: any): any;
      const htmlDict: {
        en_end: string;
        en_start: string;
        li_end: string;
        li_start: string;
        ul_end: string;
        ul_start: string;
        wr_end: string;
        wr_start: string;
      };
      function list(): any;
      const register: {
        data: {
          html: any;
          text: any;
        };
      };
      function remove(name: any): void;
      const textDict: {
        en_end: string;
        en_start: string;
        li_end: string;
        li_start: string;
        ul_end: string;
        ul_start: string;
        wr_end: string;
        wr_start: string;
      };
    }
    function has(ref: any): void;
    namespace input {
      function add(format: any, parsers: any): void;
      function addDataParser(format: any, { parser, async }: any): void;
      function addTypeParser(
        format: any,
        { dataType, predicate, extends: extend }: any
      ): void;
      function chain(args: any): any;
      function chainAsync(...args: any[]): any;
      function chainLink(input: any): any;
      function chainLinkAsync(_x: any, ...args: any[]): any;
      function data(input: any, type: any): any;
      function dataAsync(_x2: any, _x3: any, ...args: any[]): any;
      function get(format: any): any;
      function has(format: any): void;
      function hasDataParser(type: any, async: any): void;
      function hasTypeParser(type: any): void;
      function list(): void;
      function listDataParser(async: any): void;
      function listTypeParser(): void;
      function remove(format: any): void;
      function removeDataParser(type: any, async: any): void;
      function removeTypeParser(type: any): void;
      function treeTypeParser(): any;
      function type(input: any): any;
      const typeMatcher: {};
      namespace util {
        class DataParser {
          constructor(parser: any, { async }: any);
          parser: any;
          async: any;
        }
        class FormatParser {
          constructor(format: any, parsers: any);
          format: any;
          typeParser: any;
          dataParser: any;
          asyncDataParser: any;
        }
        class TypeParser {
          constructor(data: any);
          data: any;
        }
        function applyGraph(entry: any, graph: any): any;
        function dataTypeOf(thing: any): any;
        function removeGraph(entry: any): any;
        function typeOf(thing: any): any;
      }
    }
    function list(): void;
    namespace output {
      function add(name: any, formatter: any): void;
      function format(name: any, data: any, options: any): any;
      function has(name: any): any;
      function list(): any;
      const register: {
        data: {
          bibliography: any;
          bibtex: any;
          bibtxt: any;
          citation: any;
          data: any;
          label: any;
          ndjson: any;
          ris: any;
        };
      };
      function remove(name: any): void;
    }
    function remove(ref: any): void;
  }
  namespace util {
    class Register {
      constructor(data: any);
      data: any;
      add(args: any): any;
      get(key: any): any;
      has(key: any): any;
      list(): any;
      remove(args: any): any;
      set(key: any, value: any): any;
    }
    class TokenStack {
      static getMatchCallback(pattern: any): any;
      static getPatternText(pattern: any): any;
      constructor(array: any);
      stack: any;
      index: any;
      current: any;
      consume(
        pattern: any,
        //@ts-ignore
        { min = 0, max = Infinity, inverse = false, tokenMap, tokenFilter }: any
      ): any;
      consumeN(length: any): any;
      consumeSequence(sequence: any): any;
      //@ts-ignore
      consumeToken(pattern: any, { inverse = false, spaced = true }: any): any;
      //@ts-ignore
      consumeWhitespace(pattern: any, { optional = true }: any): any;
      matches(pattern: any): any;
      matchesSequence(sequence: any): any;
      tokensLeft(): any;
    }
    namespace attr {
      function getAttributedEntry(string: any, name: any, value: any): any;
      function getPrefixedEntry(value: any, id: any): any;
      function getWrappedEntry(value: any, source: any, affixes: any): any;
    }
    function deepCopy(obj: any): void;
    function fetchFile(url: any, opts: any): any;
    function fetchFileAsync(_x: any, ...args: any[]): any;
    function fetchId(list: any, prefix: any): any;
  }
}
