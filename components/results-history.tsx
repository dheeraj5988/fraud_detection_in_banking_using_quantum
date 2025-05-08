"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, CheckCircle, AlertTriangle, Trash2 } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface FormData {
  gender: string
  age: string
  creditScore: string
  employmentType: string
  maritalStatus: string
  educationLevel: string
  income: string
  a8: string
  a9: string
  a10: string
  a11: string
  a12: string
  a13: string
  a14: string
}

interface Result {
  id: string
  timestamp: number
  status: string
  score: number
  recommendation: string
  formData: FormData
}

interface ResultsHistoryProps {
  history: Result[]
  clearHistory: () => void
}

export default function ResultsHistory({ history, clearHistory }: ResultsHistoryProps) {
  const [selectedResult, setSelectedResult] = useState<Result | null>(null)

  if (history.length === 0) {
    return null
  }

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleString()
  }

  const getStatusIcon = (status: string) => {
    if (status.includes("Fraudulent")) {
      return <AlertCircle className="h-5 w-5 text-destructive" />
    } else if (status.includes("Legitimate")) {
      return <CheckCircle className="h-5 w-5 text-green-500" />
    } else {
      return <AlertTriangle className="h-5 w-5 text-amber-500" />
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>Recent Transactions</CardTitle>
            <CardDescription>History of your recent transaction checks</CardDescription>
          </div>
          <Button variant="outline" size="sm" onClick={clearHistory}>
            <Trash2 className="h-4 w-4 mr-2" /> Clear
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {history.map((result) => (
            <Dialog key={result.id}>
              <DialogTrigger asChild>
                <div
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-lg border cursor-pointer hover:bg-muted/50 transition-colors gap-2 sm:gap-0"
                  onClick={() => setSelectedResult(result)}
                >
                  <div className="flex items-center gap-3">
                    {getStatusIcon(result.status)}
                    <div>
                      <p className="font-medium">{result.status}</p>
                      <p className="text-sm text-muted-foreground">{formatDate(result.timestamp)}</p>
                    </div>
                  </div>
                  <div className="text-left sm:text-right mt-2 sm:mt-0">
                    <p className="font-medium">{result.score}%</p>
                    <p
                      className={`text-sm ${
                        result.recommendation.includes("Decline")
                          ? "text-destructive"
                          : result.recommendation.includes("Additional")
                            ? "text-amber-500"
                            : "text-green-500"
                      }`}
                    >
                      {result.recommendation}
                    </p>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-[95vw] sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Transaction Details</DialogTitle>
                  <DialogDescription>{formatDate(result.timestamp)}</DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    {getStatusIcon(result.status)}
                    <p className="font-medium text-lg">{result.status}</p>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Risk Score</span>
                      <span className="text-sm font-medium">{result.score}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          result.score > 70 ? "bg-destructive" : result.score > 40 ? "bg-amber-500" : "bg-green-500"
                        }`}
                        style={{ width: `${result.score}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="space-y-1">
                      <p className="font-medium">Gender:</p>
                      <p className="text-muted-foreground capitalize">{result.formData.gender || "Not provided"}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium">Age:</p>
                      <p className="text-muted-foreground">{result.formData.age || "Not provided"}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium">Credit Score:</p>
                      <p className="text-muted-foreground">{result.formData.creditScore || "Not provided"}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium">Employment:</p>
                      <p className="text-muted-foreground capitalize">
                        {result.formData.employmentType || "Not provided"}
                      </p>
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium">Income:</p>
                      <p className="text-muted-foreground">${result.formData.income || "Not provided"}</p>
                    </div>
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline">Close</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
