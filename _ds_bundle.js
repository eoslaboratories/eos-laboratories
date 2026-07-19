/* @ds-bundle: {"format":4,"namespace":"EOSLaboratoriesDesignSystem_841850","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"ProductCard","sourcePath":"components/core/ProductCard.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"SpecTable","sourcePath":"components/core/SpecTable.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"7a5f8ddb0a1d","components/core/Button.jsx":"bc6966409aca","components/core/ProductCard.jsx":"b8a77531992d","components/core/SectionHeading.jsx":"e1edbeb0ff75","components/core/SpecTable.jsx":"10b4520aef11","components/core/Tag.jsx":"c215f499b759"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.EOSLaboratoriesDesignSystem_841850 = window.EOSLaboratoriesDesignSystem_841850 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
/** Badge — icon-in-circle + label, for trust/compliance stats (e.g. "ISO Certified", "Reliable Results"). Mirrors the existing banner's icon-badge row. */
function Badge({
  icon,
  label,
  tone = 'blue'
}) {
  const ring = tone === 'orange' ? 'var(--eos-orange)' : 'var(--eos-blue)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      border: `1.5px solid ${ring}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: ring,
      flexShrink: 0
    }
  }, icon), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      fontSize: '13px',
      lineHeight: 1.3,
      color: 'var(--color-text-primary)'
    }
  }, label));
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const base = {
  fontFamily: 'var(--font-body)',
  fontWeight: 600,
  fontSize: '15px',
  border: 'none',
  borderRadius: 'var(--radius-pill)',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  transition: 'background-color 120ms ease, transform 80ms ease'
};
const sizes = {
  sm: {
    padding: '8px 16px',
    fontSize: '13px'
  },
  md: {
    padding: '12px 24px',
    fontSize: '15px'
  },
  lg: {
    padding: '16px 32px',
    fontSize: '16px'
  }
};
const variants = {
  primary: {
    background: 'var(--eos-orange)',
    color: '#fff'
  },
  secondary: {
    background: 'var(--eos-blue)',
    color: '#fff'
  },
  outline: {
    background: 'transparent',
    color: 'var(--eos-blue)',
    border: '1.5px solid var(--eos-blue)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--color-text-primary)'
  }
};
const hoverBg = {
  primary: 'var(--eos-orange-600)',
  secondary: 'var(--eos-blue-700)'
};

/** Button — primary marketing CTA. Variants: primary (orange), secondary (blue), outline, ghost. */
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  children,
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const v = variants[variant] || variants.primary;
  const s = sizes[size] || sizes.md;
  const bg = hover && hoverBg[variant] ? hoverBg[variant] : v.background;
  return /*#__PURE__*/React.createElement("button", {
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...s,
      ...v,
      background: bg,
      opacity: disabled ? 0.45 : 1,
      cursor: disabled ? 'not-allowed' : 'pointer',
      transform: hover && !disabled ? 'scale(0.98)' : 'scale(1)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/ProductCard.jsx
try { (() => {
/** ProductCard — product photo + name + REF code, the catalogue's per-product listing unit. */
function ProductCard({
  image,
  name,
  description,
  refCode
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      background: '#fff',
      border: '1px solid var(--color-border-default)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-sm)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--eos-gray-100)',
      aspectRatio: '4 / 3',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '16px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: name,
    style: {
      maxWidth: '100%',
      maxHeight: '100%',
      objectFit: 'contain'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 16px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: '15px',
      color: 'var(--color-text-primary)'
    }
  }, name), description && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '13px',
      color: 'var(--color-text-secondary)',
      marginTop: '4px',
      lineHeight: 1.4
    }
  }, description), refCode && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '11px',
      color: 'var(--color-text-muted)',
      marginTop: '8px',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wide)'
    }
  }, "REF ", refCode)));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
/** SectionHeading — eyebrow label + title + orange rule, opens every content section (catalogue/datasheet convention). */
function SectionHeading({
  eyebrow,
  title,
  align = 'left'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      textAlign: align
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '12px',
      fontWeight: 700,
      letterSpacing: 'var(--tracking-widest)',
      textTransform: 'uppercase',
      color: 'var(--eos-orange)',
      marginBottom: '8px'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: '28px',
      lineHeight: 1.2,
      color: 'var(--color-text-primary)',
      margin: 0
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '48px',
      height: '3px',
      background: 'var(--eos-blue)',
      borderRadius: '2px',
      margin: align === 'center' ? '14px auto 0' : '14px 0 0'
    }
  }));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/SpecTable.jsx
try { (() => {
/** SpecTable — key/value technical spec rows for datasheets/catalogues. */
function SpecTable({
  rows
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      border: '1px solid var(--color-border-default)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden'
    }
  }, rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      padding: '12px 16px',
      background: i % 2 === 0 ? '#fff' : 'var(--eos-gray-100)',
      borderTop: i === 0 ? 'none' : '1px solid var(--color-border-default)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '38%',
      fontSize: '13px',
      fontWeight: 600,
      color: 'var(--color-text-secondary)',
      flexShrink: 0
    }
  }, r.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '13px',
      color: 'var(--color-text-primary)'
    }
  }, r.value))));
}
Object.assign(__ds_scope, { SpecTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SpecTable.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
const tones = {
  blue: {
    background: 'var(--eos-blue-100)',
    color: 'var(--eos-blue-700)'
  },
  orange: {
    background: 'var(--eos-orange-100)',
    color: 'var(--eos-orange-600)'
  },
  neutral: {
    background: 'var(--eos-gray-100)',
    color: 'var(--color-text-secondary)'
  },
  dark: {
    background: 'var(--eos-charcoal)',
    color: '#fff'
  }
};

/** Tag — small pill label for product categories (e.g. "Ready to Use", "ISO Compliant"). */
function Tag({
  tone = 'blue',
  children
}) {
  const t = tones[tone] || tones.blue;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: '12px',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      padding: '5px 12px',
      borderRadius: 'var(--radius-pill)',
      ...t
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.SpecTable = __ds_scope.SpecTable;

__ds_ns.Tag = __ds_scope.Tag;

})();
