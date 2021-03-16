//
//  Thread.swift
//  LaunchDarkly
//
//  Copyright © 2018 Catamorphic Co. All rights reserved.
//

import Foundation

extension Thread {
    static func performOnMain(_ executionClosure: () -> Void) {
        guard Thread.isMainThread
        else {
            DispatchQueue.main.sync {
                executionClosure()
            }
            return
        }
        executionClosure()
    }
}
