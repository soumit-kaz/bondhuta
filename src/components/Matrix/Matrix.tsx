import type { ReactNode } from 'react'
import './Matrix.css'

type Cell = ReactNode

interface MatrixProps {
  /** Rows of the matrix; each inner array is one row of cells. */
  data: Cell[][]
  /** Optional per-row annotations, shown muted to the right of the matrix. */
  notes?: ReactNode[]
  /** Optional caption shown below the matrix (e.g. a dimension like 4×1). */
  caption?: ReactNode
  className?: string
}

/**
 * Renders a matrix with proper tall square brackets that span every row,
 * instead of per-line ASCII `[ ]` that reads like a list.
 */
export function Matrix({ data, notes, caption, className = '' }: MatrixProps) {
  const cols = data[0]?.length ?? 1

  return (
    <span className={`matrix-wrap ${className}`.trim()}>
      <span className="matrix">
        <span className="matrix-bracket matrix-bracket--left" aria-hidden="true" />
        <span
          className="matrix-grid"
          style={{ gridTemplateColumns: `repeat(${cols}, auto)` }}
        >
          {data.map((row, i) =>
            row.map((cell, j) => (
              <span className="matrix-cell" key={`${i}-${j}`}>
                {cell}
              </span>
            )),
          )}
        </span>
        <span className="matrix-bracket matrix-bracket--right" aria-hidden="true" />
        {notes && (
          <span className="matrix-notes">
            {notes.map((note, i) => (
              <span className="matrix-note" key={i}>
                {note}
              </span>
            ))}
          </span>
        )}
      </span>
      {caption && <span className="matrix-caption">{caption}</span>}
    </span>
  )
}

/** A centered equation row that lays out matrices, labels and operators inline. */
export function MatrixEq({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return <div className={`matrix-eq ${className}`.trim()}>{children}</div>
}

/** An operator / label token used between matrices (=, ×, +, labels…). */
export function Op({ children }: { children: ReactNode }) {
  return <span className="matrix-op">{children}</span>
}

/** A variable with a subscript, e.g. <Var name="W" sub="new" /> → W₍new₎. */
export function Var({ name, sub }: { name: ReactNode; sub?: ReactNode }) {
  return (
    <span className="matrix-var">
      {name}
      {sub != null && <sub>{sub}</sub>}
    </span>
  )
}
