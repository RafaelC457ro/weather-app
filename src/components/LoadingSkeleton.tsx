export function LoadingSkeleton() {
  return (
    <div className="flex flex-1 w-full gap-4">
      <div className="flex flex-col gap-4 w-2/3">
        <div className="flex flex-1">
          <div role="status" className="flex h-full w-full p-4 rounded shadow animate-pulse">
            <div className="flex flex-col flex-1 justify-between">
              <div className="flex flex-col space-y-4">
                <div className="h-6 w-60 bg-border"></div>
                <div className="h-3 w-20 bg-border"></div>
              </div>
              <div className="flex flex-col space-y-4">
                <div className="h-10 w-60 bg-border"></div>
              </div>
            </div>
            <div>
              <div className="h-48 w-48 rounded-full bg-border"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-1">
          <div role="status" className="flex flex-col  w-full p-4 shadow animate-pulse bg-card-background">
            <div className="pb-2">
              <div className="h-3 w-60 bg-border"></div>
            </div>
            <div className="flex flex-col flex-1">
              <div className="flex h-full justify-between">
                {Array(7)
                  .fill(null)
                  .map((_, index) => (
                    <div className="flex justify-between" key={index}>
                      <div className="flex flex-col items-center justify-between py-8">
                        <div className="flex flex-1 flex-col items-center justify-between">
                          <div className="flex flex-col justify-center">
                            <div className="h-3 w-20 bg-border"></div>
                          </div>
                          <div className="flex flex-col justify-center">
                            <div className="h-16 w-16 rounded-full bg-border"></div>
                          </div>
                          <div className="flex flex-col justify-center">
                            <div className="h-3 w-20 bg-border"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-1">
          <div role="status" className="w-full p-4 space-y rounded shadow animate-pulse bg-card-background">
            <div className="pb-2">
              <div className="h-3 w-60 bg-border"></div>
            </div>
            <div className="grid grid-cols-2 gap-8 py-10">
              <div className="flex flex-col items-start space-x-4">
                <div className="flex items-center justify-center space-x-4">
                  <div className="h-3 w-20 bg-border"></div>
                  <div className="h-3 w-20 bg-border"></div>
                </div>
              </div>
              <div className="flex flex-col items-start space-x-4">
                <div className="flex items-center justify-center space-x-4">
                  <div className="h-3 w-20 bg-border"></div>
                  <div className="h-3 w-20 bg-border"></div>
                </div>
              </div>
              <div className="flex flex-col items-start space-x-4">
                <div className="flex items-center justify-center space-x-4">
                  <div className="h-3 w-20 bg-border"></div>
                  <div className="h-3 w-20 bg-border"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-1">
        <div role="status" className="w-full p-4 space-y rounded shadow animate-pulse bg-card-background">
          <div className="pb-2">
            <div className="h-3 w-60 bg-border"></div>
          </div>
          <div className="h-full flex flex-1 flex-col justify-betweenspace-y-4">
            {Array(7)
              .fill(null)
              .map((_, index) => (
                <>
                  <div className="flex flex-1 justify-between" key={index}>
                    <div className="flex flex-1 justify-center items-center">
                      <div className="h-3 w-20 bg-border"></div>
                    </div>
                    <div className="flex flex-1 justify-center items-center space-x-2">
                      <div className="h-16 w-16 rounded-full bg-border"></div>
                      <div className="h-3 w-20 bg-border"></div>
                    </div>
                    <div className="flex flex-1 justify-center items-center">
                      <div className="h-3 w-20 bg-border"></div>
                    </div>
                  </div>
                  {index !== 6 && <hr className="border-border" />}
                </>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
