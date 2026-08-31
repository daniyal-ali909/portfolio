/**
 * Copyright (c) 2026 Daniyal.dev All rights reserved.
 */

/**
 * Node Modules
 */
import PropTypes from "prop-types";

/**
 * Primary Button
 */

const ButtonPrimary = ({
   href = "#contact",
   target = "_self",
   label = "Button",
   icon,
   classes = "",
}) => {
 if (href) {
      return (
        <a 
        href={href}
        target={target}
        className={"btn btn-primary " + classes}
        >
            {label}

            {icon ? 
              <span className="material-symbols-rounded" aria-hidden="true">
                {icon}
              </span>
              : undefined
            }
        </a>
      )  
    } else {
        return (
            <button className={"btn btn-primary " + classes}>
                {label}
            {icon ? 
              <span className="material-symbols-rounded" aria-hidden="true">
                {icon}
              </span>
              : undefined
            }
            </button>
        )
    }
}

ButtonPrimary.propTypes = {
    label: PropTypes.string,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string
}



/**
 * Outline Button
 */

const ButtonOutline = ({
   href = "#contact",
   target = "_self",
   label = "Button",
   icon,
   classes = "",
}) => {
 if (href) {
      return (
        <a 
        href={href}
        target={target}
        className={"btn btn-outline " + classes}
        >
            {label}

            {icon ? 
              <span className="material-symbols-rounded" aria-hidden="true">
                {icon}
              </span>
              : undefined
            }
        </a>
      )  
    } else {
        return (
            <button className={"btn btn-primary " + classes}>
                {label}
            {icon ? 
              <span className="material-symbols-rounded" aria-hidden="true">
                {icon}
              </span>
              : undefined
            }
            </button>
        )
    }
}

ButtonOutline.propTypes = {
    label: PropTypes.string,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string
}

export {
    ButtonPrimary,
    ButtonOutline
};
