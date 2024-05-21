
export const Container = ({className="",children,width="full"}) => {
  return (
    <div className={`w-${width} ${className} flex flex-col`} >
        {children}
    </div>
  )
}
